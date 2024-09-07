import Frame from "./models/Frame"
import { Gallery } from "./models/Gallery"
import { Image } from "./models/Image"
import { User } from "./models/User"


const users: User[] = [
    {
        user_id: "user_0000",
        username: "lccuellar"
    },
    {
        user_id: "user_0001",
        username: "carcuelker"
    }
]

const galleries: Gallery[] = [
    {
        gallery_id: "gallery_0000",
        User: users[0],
        user_id: users[0].user_id,
        gallery_name: "Ascension",
        gallery_description: "Ascension brings forth new opportunities as the world evolves and transforms."
    },
    {
        gallery_id: "gallery_0001",
        User: users[0],
        user_id: users[0].user_id,
        gallery_name: "Ballast",
        gallery_description: "Ballast drifted aimlessly across the ocean, seeking refuge from storms."
    },
    {
        gallery_id: "gallery_0002",
        User: users[1],
        user_id: users[1].user_id,
        gallery_name: "Crater",
        gallery_description: "Crater walls crumbled as the explorers descended into the unknown depths."
    }
]

const frames: Frame[] = [
    {
        frame_id: "frame_0000",
        user_id: users[0].user_id,
        User: users[0],
        default_width: 100,
        default_height: 200
    },
    {
        frame_id: "frame_0001",
        user_id: users[0].user_id,
        User: users[0],
        default_width: 150,
        default_height: 250
    },
    {
        frame_id: "frame_0002",
        user_id: users[1].user_id,
        User: users[1],
        default_width: 50,
        default_height: 50
    },
]

const images: Image[] = [
    {
        image_id: "image_0000",
        gallery_id: galleries[0].gallery_id,
        Gallery: galleries[0],
        frame_id: frames[0].frame_id,
        Frame: frames[0],
        image_name: "Arch",
        image_description: "Arch shadows stretched across the ruins as twilight slowly descended.",
        width: 100,
        height: 100
    },
    {
        image_id: "image_0001",
        gallery_id: galleries[0].gallery_id,
        Gallery: galleries[0],
        frame_id: frames[0].frame_id,
        Frame: frames[0],
        image_name: "Broke",
        image_description: "Broke silence filled the room as tension rose between them.",
        width: 50,
        height: 100
    },
    {
        image_id: "image_0002",
        gallery_id: galleries[0].gallery_id,
        Gallery: galleries[0],
        frame_id: frames[1].frame_id,
        Frame: frames[1],
        image_name: "Cheese",
        image_description: "Cheese melted slowly over the bread, filling the air deliciously.",
        width: 150,
        height: 200
    },
    {
        image_id: "image_0003",
        gallery_id: galleries[1].gallery_id,
        Gallery: galleries[1],
        frame_id: frames[0].frame_id,
        Frame: frames[0],
        image_name: "Dark",
        image_description: "Dark clouds gathered quickly, signaling the arrival of the storm.",
        width: 150,
        height: 200
    },
    {
        image_id: "image_0004",
        gallery_id: galleries[1].gallery_id,
        Gallery: galleries[1],
        frame_id: frames[1].frame_id,
        Frame: frames[1],
        image_name: "Easter",
        image_description: "Easter morning dawned brightly, filling the sky with vibrant colors.",
        width: 75,
        height: 200
    },

    {
        image_id: "image_0005",
        gallery_id: galleries[2].gallery_id,
        Gallery: galleries[2],
        frame_id: frames[2].frame_id,
        Frame: frames[2],
        image_name: "Fidget",
        image_description: "Fidget nervously, she waited for the results to be announced.",
        width: 75,
        height: 200
    },
    {
        image_id: "image_0006",
        gallery_id: galleries[2].gallery_id,
        Gallery: galleries[2],
        frame_id: frames[2].frame_id,
        Frame: frames[2],
        image_name: "Gallant",
        image_description: "Gallant knights rode through the valley, ready to defend their kingdom.",
        width: 75,
        height: 200
    },
    {
        image_id: "image_0006",
        gallery_id: galleries[2].gallery_id,
        Gallery: galleries[2],
        image_name: "Horse",
        image_description: "Horse hooves thundered across the field as the race began.",
        width: 75,
        height: 200
    },
]

export {users, galleries, frames, images}