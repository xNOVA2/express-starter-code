import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    instructor: {
        type: String,
    },
    class:{
        type: String,
    },
    logo:{
        type:String
    }

},{ timestamps: true, versionKey: false });

const Course = mongoose.model('course', courseSchema);
