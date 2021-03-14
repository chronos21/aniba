const mongoose = require('mongoose');
const { formatDistanceToNow } = require('date-fns')

const episodeSchema = new mongoose.Schema(
    {
        parentId: String,
        title: String,
        href: String,
        img: String,
        releasedAt: Date,
    },
    {
        timestamps: true,
        toJSON: {virtuals: true}
    }
);

episodeSchema.virtual('time')
    .get(function () {
        return formatDistanceToNow(this.releasedAt, {addSuffix: true}).replace('about ', '')
    });

const Episode = mongoose.model('Episode', episodeSchema);

module.exports = Episode;
