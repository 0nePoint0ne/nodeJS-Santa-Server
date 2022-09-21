const SantaList = require(`../models/santaList`);

exports.receive_wish = async (req, res, next) => {
    try {
      const [child, _] = await SantaList.check_child_status(req.body.userid)
      console.log
      if (child.length === 1){
        if(child[0].age < 10){
          const wish = new SantaList(child[0].uid, req.body.wish);
          wish.save();
          res.status(201).json({'msg': `here is your gift a ${req.body.wish}`});
        }
        else{
          res.status(422).json({'msg': 'Your too old for presents!'});
        }
      }
      else {
        res.status(422).json({'msg': 'child not found'});
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  exports.get_list = async (req, res, next) => {
    try {
      result = await SantaList.list_email()
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
  