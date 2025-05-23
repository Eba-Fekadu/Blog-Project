import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true, 
      unique: true,
    },
    status: {
      type: String,
      default: 'Open',
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  }, { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;