<h1>SetUp FrontEnd</h1>

QuestSearch 

An application used to filter and search questions, built with React, JavaScript, and SCSS.

<h3>Project status</h3>

This project is currently in development. Users can filter questions by question type filters and search questions based on title. Functionality to sort by additional parameters is in progress.
[Checkout Live working here](https://yogesh2i.github.io/SpeakX/)


## Installation and Setup Instructions
 

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  

<h5>Working Images</h5>
![image](https://github.com/user-attachments/assets/dc302116-4f5b-4455-bcb3-cfdadce40ba4)





<h1>API Gateway Setup</h1>


## Installation and Setup Instructions
 

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  


To Start Server:

`node index.js`  

To Visit:

`localhost:5001/speakx/questions`  

Example url: http://localhost:5001/speakx/questions?limit=2&page=1&query=breakfast&filter=All

Show questions related to query with applied filters.

**URL** : `/speakx/questions`

**Method** : `GET`

**Auth required** : NO

**Query Params**: 

query = String (Question title user want to search)

limit = Integer (No. of questions per page)

page = Integer (Page No.)

filter = String (Question filters by type. Can be --All, MCQ, READ_ALONG, CONTENT_ONLY, ANAGRAM) 


**Permissions required** : None

**Data constraints** : `{}`

## Success Responses

**Condition** : User can not see any questions.

**Code** : `200 OK`

**Content** : `{"success": true, "questions": [], "isMore": false}`

### OR

**Condition** : User can see one or more questions.

**Code** : `200 OK`

**Content** : In this example, the User can see questions based on filter:

```json
{
  "success": true,
  "questions": [
    {
      "blocks": [
        {
          "text": "T",
          "isAnswer": true,
          "showInOption": true
        },
        {
          "text": "O",
          "isAnswer": true,
          "showInOption": true
        },
        {
          "text": "Y",
          "isAnswer": true,
          "showInOption": true
        }
      ],
      "options": [],
      "type": "ANAGRAM",
      "anagramType": "WORD",
      "solution": "TOY",
      "title": "Rearrange the letters to form a word"
    }
],
"isMore": true
}
```

## Error Response

**Condition** : If Server Fails.

**Code** : `500`

**Content** :

```json
{
   "success": false,
   "msg": "couldn't find any questions"
}
```

<h1>Question Service(gRPC)</h1>
<p>This folder is for question service</p>
<p>Checkin to question_service folder</p>
<p>install required packages and dependencies using npm install</p>
<p>Update mongouri and dbName under /lib/urls.js</p>
<p>use command - node index.js</p>
