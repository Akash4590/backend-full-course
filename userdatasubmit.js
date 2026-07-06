function userdatasubmit(req,res){
res.write(`
              <h1>user form data </h1>
            <button type="submit">Submit</button>
             `)
             res.end("")
}
module.exports  = userdatasubmit;