import Letter from "./Letter";

const initList = () => {
    const rows = 6; 
    const columns = 6;
    return Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => new Letter('', 'gray'))
    );
  };


export default initList;