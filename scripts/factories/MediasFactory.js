import { Image, Video } from '../models/Media';

class MediasFactory {
    constructor(data) {
        if(data.image === 'image') {
            return new Image(data)
        }
        else if(data.video === 'video') {
            return new Video(data)
        }

        else {
            throw "Unknown type format"
        }
    }
}

export { MediasFactory }