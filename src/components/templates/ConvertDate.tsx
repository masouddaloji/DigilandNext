const ConvertDate = ({englishDate}:{englishDate:Date}) => {
    const date = new Date(englishDate);
    const options:{
        day: "numeric" | "2-digit" | undefined,
        year: "numeric" | "2-digit" | undefined,
        month: "long"|"numeric" | "2-digit" | undefined,
        
    } = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const persianDate = new Intl.DateTimeFormat("fa", options).format(date);
    return persianDate;
  };
  
  export default ConvertDate;