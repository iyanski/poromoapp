import { table, getMinifiedItem } from "../../utils/Airtable";

const createPromo =  async (req, res) => {
  const { 
    brand,
    title,
    description,
    mechanics,
    terms,
    email
   } = req.body;
  try {
    const newRecords = await table.create([{ fields: {
      Brand: brand,
      Title: title,
      Description: description,
      Mechanics: mechanics,
      Terms: terms,
      Email: email
    } }]);
    res.status(200).json(getMinifiedItem(newRecords[0]));
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong! 😕" });
  }
};
export default createPromo
