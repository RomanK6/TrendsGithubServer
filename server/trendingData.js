import trending from 'trending-github';
import {ReposByDay, ReposByWeek, ReposByMonth} from './Model.js';




const getTrendsByDay = () => {
    let trendingDataByDay;
    trending().then(repos => {
        trendingDataByDay = repos;
            ReposByDay.collection.drop();
            ReposByDay.create(trendingDataByDay, function (err) {
                if (err) console.log(err);
            });
        });
};

const getTrendsByWeek = () => {
    let trendingDataByWeek;
    trending('weekly').then(repos => {
        trendingDataByWeek = repos;
            ReposByWeek.collection.drop();
            ReposByWeek.create(trendingDataByWeek, function (err) {
                if (err) console.log(err);
            });
        });
};

const getTrendsByMonth = () => {
    let trendingDataByMonth;
    trending('monthly').then(repos => {
        trendingDataByMonth = repos;
            ReposByMonth.collection.drop();
            ReposByMonth.create(trendingDataByMonth, function (err) {
                if (err) console.log(err);
            });
        });
};

export const getAllTrends = () => {
    getTrendsByDay();
    getTrendsByWeek();
    getTrendsByMonth();
};

export const getTrendsPerTime = (interval) => {
    setInterval(() => {
        getTrendsAllTrends();
    }, interval);
};
