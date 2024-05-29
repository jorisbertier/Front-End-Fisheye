import { MediaCard } from "../templates/MediaCard"

class Media {
    constructor(data) {
        this.id = data.id
        this.photographerId = data.photographerId
        this.title = data.title
        this.likes = data.likes
        this.date = data.date
        this.price = data.price
    }
    createCardMedia() {
        let cardMedia = new MediaCard()
        return cardMedia.createCardMedia()
    }
}

class Image extends Media {
    constructor(data) {
        super(data);
        this.image = data.image
    }
}

class Video extends Media {
    constructor(data) {
        super(data);
        this.video = data.video
    }
}

export { Image, Video, Media }