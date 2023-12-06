// Routes
app.get('/', async (req, res) => {
    const items = await Item.find();
    res.render('index', { items });
  });
  
  app.get('/addItem', (req, res) => {
    res.render('addItem');
  });
  
  app.post('/addItem', async (req, res) => {
    const { itemName, itemDescription, itemPic } = req.body;
    const newItem = new Item({
      itemName,
      itemDescription,
      itemPic,
    });
    await newItem.save();
    res.redirect('/');
  });