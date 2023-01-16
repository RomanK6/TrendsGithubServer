import mongoose from "mongoose";


const Repos = mongoose.Schema({
    author: {type: String, required: true},
    name: {type: String, required: true},
    href: {type: String, required: true},
    description: {type: String, required: false},
    language: {type: String, required: false},
    stars: {type: Number, required: true},
    forks: {type: Number, required: false},
    starsInPeriod: {type: Number, required: true}
});

export const ReposByDay = mongoose.model('ReposByDay', Repos);
export const ReposByWeek = mongoose.model('ReposByWeek', Repos);
export const ReposByMonth = mongoose.model('ReposByMonth', Repos);