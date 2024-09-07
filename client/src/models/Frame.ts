import { User } from "./User"

export default interface Frame {
    frame_id: string
    user_id: string
    User: User
    default_width: number
    default_height: number
}