//IMPORTANT WE MAY NEED TO ADD ../ IF WE CREATE A VLOG FOLDER
const Vlog = require('../models/vlogs.js')

const dataController = {
  index(req, res, next) {
    Vlog.find({}, (error, allVlogs) => {
      if (error) {
        res.status(404).send({
          msg: error.message
        })
      } else {
        res.locals.data.vlogs = allVlogs
        next()
      }
    })
  },

  create(req, res, next) {
    // const { title, date, body } = req.body
    console.log(req.body)
    if (req.body.newContent === 'on') {
      //if checked, req.body.newContent is set to 'on'
      req.body.newContent = true
    } else {
      //if not checked, req.body.newContent is undefined
      req.body.newContent = false
    }

    // Use Model to create Vlog Document
    Vlog.create(req.body, (error, createdVlog) => {
      // Once created - respond to client
      if (error) {
        res.status(404).send({
          msg: error.message
        })
      } else {
        res.locals.data.vlog = createdVlog
        next()
      }
    })
  },

  show(req, res, next) {
    Vlog.findById(req.params.id, (err, foundVlog) => {
      if (err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        ;(res.locals.data.vlog = foundVlog), next()
      }
    })
  },

  update(req, res, next) {
    // console.log(req.body.body)
    // UPDATE
    //res.send('Should update one log by id')
    if (req.body.newContent === 'on') {
      req.body.newContent = true
    } else {
      req.body.newContent = false
    }
    Vlog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updatedVlog) => {
        if (err) {
          res.status(404).send({
            msg: err.message
          })
        } else {
          res.locals.data.vlog = updatedVlog
          next()
        }
      }
    )
  },

  destroy(req, res, next) {
    Vlog.findByIdAndRemove(req.params.id, (err, vlog) => {
      if (err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.vlog = vlog
        next()
      }
    })
  }
}

module.exports = dataController
