import { Client } from '@notionhq/client';
import type { PageObjectResponse, RichTextItemResponse } from '@notionhq/client';

// Inicializa el cliente de Notion
const notion = new Client({
  auth: import.meta.env.VITE_NOTION_API_KEY,
});

// Interfaces para los datos de Notion
export interface NotionInstructor {
  id: string;
  nombre: string;
  posicion: string;
  descripcion: string;
  imagen_url: string;
}

export interface NotionCarouselImage {
  id: string;
  imagen_url: string;
  alt: string;
  caption: string;
}

export interface NotionVideo {
  id: string;
  video_url: string;
}

// Funciones helper para acceso seguro a propiedades
const getRichTextContent = (richTextArray?: RichTextItemResponse[]): string => {
  if (!richTextArray || richTextArray.length === 0) return '';
  return richTextArray.map(item => item.plain_text || '').join('');
};

const getFileUrl = (filesArray?: any[]): string => {  // Tipo genérico para files, pero seguro
  if (!filesArray || filesArray.length === 0) return '';
  const firstFile = filesArray[0];
  if (firstFile.type === 'file') {
    return firstFile.file?.url || '';
  } else if (firstFile.type === 'external') {
    return firstFile.external?.url || '';
  }
  return '';
};

const getTitleContent = (titleArray?: { type: 'title'; title: RichTextItemResponse[] }['title']): string => {
  return getRichTextContent(titleArray);
};

export const getInstructorsFromNotion = async (): Promise<NotionInstructor[]> => {
  try {
    const response = await notion.databases.query({
      database_id: import.meta.env.VITE_NOTION_INSTRUCTORS_DB_ID as string,
    });

    return (response.results as PageObjectResponse[]).map((page) => {
      const properties = page.properties;
      const nombre = properties.Nombre as any;
      const posicion = properties.Posicion as any;
      const descripcion = properties.Descripcion as any;
      const imagen = properties.Imagen as any;

      return {
        id: page.id,
        nombre: nombre?.type === 'title' ? getTitleContent(nombre.title) : '',
        posicion: posicion?.type === 'rich_text' ? getRichTextContent(posicion.rich_text) : '',
        descripcion: descripcion?.type === 'rich_text' ? getRichTextContent(descripcion.rich_text) : '',
        imagen_url: imagen?.type === 'files' ? getFileUrl(imagen.files) : '',
      };
    });
  } catch (error) {
    console.error('Error al obtener instructores de Notion:', error);
    return [];
  }
};

export const getCarouselImagesFromNotion = async (): Promise<NotionCarouselImage[]> => {
  try {
    const response = await notion.databases.query({
      database_id: import.meta.env.VITE_NOTION_CAROUSEL_DB_ID as string,
    });

    return (response.results as PageObjectResponse[]).map((page) => {
      const properties = page.properties;
      const imagen = properties.Imagen as any;
      const alt = properties.Alt as any;
      const caption = properties.Caption as any;

      return {
        id: page.id,
        imagen_url: imagen?.type === 'files' ? getFileUrl(imagen.files) : '',
        alt: alt?.type === 'rich_text' ? getRichTextContent(alt.rich_text) : '',
        caption: caption?.type === 'rich_text' ? getRichTextContent(caption.rich_text) : '',
      };
    });
  } catch (error) {
    console.error('Error al obtener imágenes del carrusel de Notion:', error);
    return [];
  }
};

export const getVideoFromNotion = async (): Promise<NotionVideo | null> => {
  try {
    const response = await notion.databases.query({
      database_id: import.meta.env.VITE_NOTION_VIDEO_DB_ID as string,
    });

    if (response.results.length > 0) {
      const page = response.results[0] as PageObjectResponse;
      const properties = page.properties;
      const video = properties.Video_URL as any;

      return {
        id: page.id,
        video_url: video?.type === 'rich_text' ? getRichTextContent(video.rich_text) : '',
      };
    }
    return null;
  } catch (error) {
    console.error('Error al obtener video de Notion:', error);
    return null;
  }
};