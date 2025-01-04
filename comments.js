// Create web server
...

app.get('/comments', function(req, res) {
  res.send(comments);
});

app.post('/comments', function(req, res) {
  var newComment = req.body;
  comments.push(newComment);
  res.send(newComment);
});

// Start the server
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});