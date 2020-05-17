# Postman
This is just a clone of Postman....which is used to fetch api...using get and post request from the server..........
This will help you fetching the results of the api from the server....without loading the page...
here,for the post request we have provided a feature to either use JSON....or the custom parameters...
NOTE::while entering Data for the post request...it should be a valid oneeee........
few Examples::

1.GET
https://randomuser.me/api/
https://jsonplaceholder.typicode.com/posts/

2.POST
https://jsonplaceholder.typicode.com/posts/1

parameters...
1.JSON
{
      "title": 'foo',
      "body": 'bar',
      "userId": 1
    }
    
2.Custom parameters..

KEY        Value
title       foo
body        bar
userID      1


OUTPUT.......

{
  id: 101,
  title: 'foo',
  body: 'bar',
  userId: 1
}

