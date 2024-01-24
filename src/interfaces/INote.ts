import IDate from "./IDate";

interface INote {
    id: string,
    title: string,
    date: IDate,
    content: string
}

export default INote;