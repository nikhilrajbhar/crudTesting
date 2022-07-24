import Product from "../../models/product";
import createHandler from "../../mongoose/createHandler";

const handler = createHandler();

handler.get(async (req, res) => {
  await getEmployees(req, res)
});

handler.post(async (req, res) => {
  await postEmployees(req, res)
});

const getEmployees = async (req, res) => {

  try {
    Product.find().then(data => {
      res.status(200).json({ success: true, data })
    })

  } catch (error) {
    console.log('error', error)
  }
}

const postEmployees = async (req, res) => {
  let { productName, productImage, favorite, price, productDescription } = req.body;
  try {
    const postedData = await new Product({
      productName, productImage, favorite, price, productDescription
    }).save()
    res.status(201).json(postedData)

  } catch (error) {
    console.log('error', error)
  }

}


export default (req, res) => handler.run(req, res)