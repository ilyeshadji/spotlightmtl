import moment from 'moment';

export const dateHuman = (date: Date) => {
    return moment(date).format('MMMM Do YYYY');
};
