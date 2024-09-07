import { User } from "./User"

export interface Gallery {
    gallery_id: string
    User: User
    user_id: string
    gallery_name: string
    gallery_description?: string   
}