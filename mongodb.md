- To stsrt mongo shell use - mongosh comand
- To see databases use- show dbs
- create a new db- use school
- create a collection and add data - db.students.insertOne({name:"Deepak", age:23})
- show db data -  db.students.find()
- clustor0 pass - 6370183377
- exit from terminal - exit
- give your othorized password not the original password when want to connect mongo atlas and mongoshell or mongodbAtlash . SOME TINE IT IS WORK INCASE OF IF YOU ARE NOT USING ANY SPECIAL CHARACTERS @%$ ETC.. OTHERWISE FOR NORMAL TEXT IT ACCEPTS.
- Jab tak collection nahi banega tabtak database nahi dekhi dega create hone ke bad vi.

- MongoDB Presentation - [canva](https://www.canva.com/design/DAGMvEWWNiA/45pt6qAw4b5LyswAqKLRPA/edit)

- mongodb dummy data [cars data](https://www.canva.com/design/DAGNfeKTz_Q/nJB6OKFDJxFxiAxklMrVXw/edit)

- ctrl + l - for clear console

## find
- db.cars.findOne()
- db.cars.find({},{model:1})  projections -{model:1}, 1- means true, {}- match all the documents
- db.cars.find({},{model:1,_id:0})  // remove id parts
- db.cars.find({},{model:1,_id:0,maker:1})
- db.cars.find({fuel_type:"Petrol"})
- db.cars.find({features:"Sunroof"})