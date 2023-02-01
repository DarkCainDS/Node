exports.success = (req,res, message, status) =>  {
    res.status(status || 200).send({
        error: '',
        body: message
    });
    //res.send(message);
    //res.send('First Call');
}

exports.error = (req,res, message, status, details) =>  {
    console.error(details);
    res.status(status || 500).send({
        error: message,
        body: '',
    });
    res.send(message);
    res.send('First Call');
}