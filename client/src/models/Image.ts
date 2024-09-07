import Frame from "./Frame"
import { Gallery } from "./Gallery"

export interface Image {
    image_id: string
    gallery_id: string
    Gallery: Gallery
    frame_id?: string
    Frame?: Frame
    image_name: string
    image_description?: string
    width: number
    height: number
}