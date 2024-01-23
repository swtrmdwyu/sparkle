import IDate from "../interfaces/IDate";


function getCurrentData(): IDate {
    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString();


    const date: IDate = {
        date: currentDate,
        day: currentDate.getDate(),
        month: 'Mar',
        year: 2024,
        weekday: dateString.substring(0, 3)
    }

    console.log(date)

    return date;
}

export default getCurrentData;