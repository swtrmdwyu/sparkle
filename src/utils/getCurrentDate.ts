import IDate from "../interfaces/IDate";

function getCurrentData(): IDate {
    const weekDays = [
        'Domingo', 'Segunda-feira', 'Terça-feira', 
        'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
    ];
    const  months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
      
    const currentDate = new Date();

    const date: IDate = {
        date: currentDate,
        day: currentDate.getDate(),
        month: months[currentDate.getMonth()],
        year: currentDate.getFullYear(),
        weekday: weekDays[currentDate.getDay()]
    }

    return date;
}

export default getCurrentData;