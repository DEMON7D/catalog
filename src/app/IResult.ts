export  interface IResult {
    name: string;
    category:
      {
        name: string;
      }[];
    year: string;
    brand: string;
    description: string;
    image: string[];
    characteristic:
      {
        name: string;
        value: string;
      }[];
}
