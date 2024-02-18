var sta3 = ["www.", "orions", "techelite", ".com"];
                              var pos = 0,
                                na,
                                overall,
                                test1,
                                temp = 1,
                                test,
                                test_status,
                                question,
                                choice,
                                choices,
                                chA,
                                chB,
                                chC,
                                chD,
                                correct = 0,
                                test11 = 0,
                                colour = 0,
                                nosub = 0,
                                wrong = 0,
                                book = 0,
                                nbook = 0,
                                answered = 0;
                              //2dimensional array which consists of question,optionA,optionB,optionC,correctoption;

                              let questions = [
                                                [
                                                  "Which tag is used to define an unordered list in HTML?",
                                                  "<ul>",
                                                  "<ol>",
                                                  "<li>",
                                                  "<list>",
                                                  "A"
                                                ],
                                                [
                                                  "What does CSS stand for?",
                                                  "Creative Style Sheets",
                                                  "Cascading Style Sheets",
                                                  "Computer Style Sheets",
                                                  "Colorful Style Sheets",
                                                  "B"
                                                ],
                                                [
                                                  "Which HTML attribute is used to define inline styles?",
                                                  "style",
                                                  "css",
                                                  "class",
                                                  "inline",
                                                  "A"
                                                ],
                                                [
                                                  "In JavaScript, which method is used to print something to the console?",
                                                  "print()",
                                                  "log()",
                                                  "console.log()",
                                                  "output()",
                                                  "C"
                                                ],
                                                [
                                                  "What does the CSS property 'display: none;' do?",
                                                  "Hides the element",
                                                  "Makes the element visible",
                                                  "Adds padding to the element",
                                                  "Makes the element inline-block",
                                                  "A"
                                                ],
                                                [
                                                  "Which of the following is NOT a valid HTML color name?",
                                                  "Blue",
                                                  "Green",
                                                  "Tealicious",
                                                  "Cyan",
                                                  "C"
                                                ],
                                                [
                                                  "What does the === operator do in JavaScript?",
                                                  "Assigns a value",
                                                  "Compares value and type",
                                                  "Compares only value",
                                                  "Checks if values are equal",
                                                  "B"
                                                ],
                                                [
                                                  "Which CSS property is used to control the space between lines of text?",
                                                  "line-height",
                                                  "text-indent",
                                                  "letter-spacing",
                                                  "word-spacing",
                                                  "A"
                                                ],
                                                [
                                                  "What is the correct way to link an external CSS file to an HTML document?",
                                                  "<link rel=\"stylesheet\" href=\"styles.css\">",
                                                  "<style src=\"styles.css\">",
                                                  "<css>styles.css</css>",
                                                  "<style href=\"styles.css\">",
                                                  "A"
                                                ],
                                                [
                                                  "Which HTML tag is used to create a hyperlink?",
                                                  "<link>",
                                                  "<href>",
                                                  "<a>",
                                                  "<hyperlink>",
                                                  "C"
                                                ],
                                                [
                                                  "What is the correct way to comment out code in JavaScript?",
                                                  "// This is a comment",
                                                  "/* This is a comment */",
                                                  "<!-- This is a comment -->",
                                                  "<!--- This is a comment --->",
                                                  "B"
                                                ],
                                                [
                                                  "Which CSS property is used to change the text color of an element?",
                                                  "text-color",
                                                  "color",
                                                  "text-style",
                                                  "font-color",
                                                  "B"
                                                ],
                                                [
                                                  "In HTML, which tag is used to create a table?",
                                                  "<table>",
                                                  "<tr>",
                                                  "<td>",
                                                  "<th>",
                                                  "A"
                                                ],
                                                [
                                                  "Which JavaScript function is used to round a number to the nearest integer?",
                                                  "round()",
                                                  "ceil()",
                                                  "floor()",
                                                  "random()",
                                                  "A"
                                                ],
                                                [
                                                  "What does the CSS property 'position: absolute;' do?",
                                                  "Positions the element relative to its parent",
                                                  "Positions the element relative to the browser window",
                                                  "Removes the element from the document flow",
                                                  "Aligns the element to the right",
                                                  "C"
                                                ],
                                                [
                                                  "Which HTML tag is used to create a form?",
                                                  "<form>",
                                                  "<input>",
                                                  "<submit>",
                                                  "<fieldset>",
                                                  "A"
                                                ],
                                                [
                                                  "What does the CSS property 'float: left;' do?",
                                                  "Floats the element to the left",
                                                  "Floats the element to the right",
                                                  "Centers the element horizontally",
                                                  "Removes the element from the document flow",
                                                  "A"
                                                ],
                                                [
                                                  "In JavaScript, which keyword is used to declare a variable?",
                                                  "var",
                                                  "int",
                                                  "float",
                                                  "let",
                                                  "D"
                                                ],
                                                [
                                                  "Which HTML tag is used to create a horizontal line?",
                                                  "<line>",
                                                  "<hr>",
                                                  "<horizontal>",
                                                  "<hl>",
                                                  "B"
                                                ],
                                                [
                                                  "What does the CSS property 'font-weight: bold;' do?",
                                                  "Makes the text italic",
                                                  "Underlines the text",
                                                  "Makes the text bold",
                                                  "Increases the font size",
                                                  "C"
                                                ],
                                                [
                                                  "What is 25% of 80?",
                                                  "15",
                                                  "20",
                                                  "25",
                                                  "30",
                                                  "B"
                                                ],
                                                [
                                                  "If a car travels at 60 km/h, how long will it take to travel 180 kilometers?",
                                                  "1 hour",
                                                  "2 hours",
                                                  "3 hours",
                                                  "4 hours",
                                                  "C"
                                                ],
                                                [
                                                  "What is the next number in the sequence: 2, 4, 8, 16, ...?",
                                                  "32",
                                                  "24",
                                                  "20",
                                                  "64",
                                                  "A"
                                                ],
                                                [
                                                  "If a shirt costs $20 and is discounted by 25%, what is the discounted price?",
                                                  "$5",
                                                  "$15",
                                                  "$18",
                                                  "$25",
                                                  "C"
                                                ],
                                                [
                                                  "Simplify: (5 + 3) × (8 - 4)",
                                                  "20",
                                                  "24",
                                                  "32",
                                                  "16",
                                                  "B"
                                                ],
                                                [
                                                  "What is the perimeter of a rectangle with sides of length 5 cm and 8 cm?",
                                                  "10 cm",
                                                  "18 cm",
                                                  "26 cm",
                                                  "40 cm",
                                                  "C"
                                                ],
                                                [
                                                  "If a train travels at 80 km/h, how far will it travel in 2.5 hours?",
                                                  "150 km",
                                                  "180 km",
                                                  "200 km",
                                                  "220 km",
                                                  "C"
                                                ],
                                                [
                                                  "If x = 6 and y = 4, what is the value of x² - y²?",
                                                  "20",
                                                  "16",
                                                  "10",
                                                  "8",
                                                  "B"
                                                ],
                                                [
                                                  "What is the missing number in the sequence: 3, 6, 12, 24, ...?",
                                                  "36",
                                                  "48",
                                                  "30",
                                                  "28",
                                                  "B"
                                                ],
                                                [
                                                  "If a circle has a diameter of 10 cm, what is its circumference?",
                                                  "20π cm",
                                                  "10π cm",
                                                  "15π cm",
                                                  "5π cm",
                                                  "A"
                                                ],
                                                [
                                                  "What is the area of a triangle with base 6 cm and height 8 cm?",
                                                  "24 sq cm",
                                                  "30 sq cm",
                                                  "36 sq cm",
                                                  "48 sq cm",
                                                  "A"
                                                ],
                                                [
                                                  "If a box contains 24 chocolates and 6 chocolates are taken out, what percentage of chocolates remain?",
                                                  "25%",
                                                  "50%",
                                                  "75%",
                                                  "80%",
                                                  "C"
                                                ],
                                                [
                                                  "What is the next prime number after 17?",
                                                  "18",
                                                  "19",
                                                  "20",
                                                  "21",
                                                  "B"
                                                ],
                                                [
                                                  "If a triangle has sides of lengths 3 cm, 4 cm, and 5 cm, what type of triangle is it?",
                                                  "Scalene",
                                                  "Isosceles",
                                                  "Equilateral",
                                                  "Right-angled",
                                                  "D"
                                                ],
                                                [
                                                  "A bookshelf has 5 shelves, each can hold 10 books. If 8 books are placed on each shelf, how many books are left?",
                                                  "10",
                                                  "12",
                                                  "18",
                                                  "22",
                                                  "C"
                                                ],
                                                [
                                                  "What is the sum of the first 10 positive integers?",
                                                  "45",
                                                  "50",
                                                  "55",
                                                  "60",
                                                  "C"
                                                ],
                                                [
                                                  "If 3x + 7 = 22, what is the value of x?",
                                                  "5",
                                                  "7",
                                                  "9",
                                                  "10",
                                                  "A"
                                                ],
                                                [
                                                  "What is the median of the following set of numbers: 4, 7, 9, 12, 15?",
                                                  "7",
                                                  "9",
                                                  "10",
                                                  "12",
                                                  "B"
                                                ],
                                                [
                                                  "What is 30% of 150?",
                                                  "35",
                                                  "45",
                                                  "50",
                                                  "55",
                                                  "B"
                                                ],
                                                [
                                                  "If a clock reads 2:45 PM, how many degrees has the hour hand moved since noon?",
                                                  "135°",
                                                  "150°",
                                                  "157.5°",
                                                  "165°",
                                                  "D"
                                                ],
                                                [
                                                  "What is the capital of France?",
                                                  "Rome",
                                                  "Berlin",
                                                  "Paris",
                                                  "Madrid",
                                                  "C"
                                                ],
                                                [
                                                  "Who wrote the famous novel \"To Kill a Mockingbird\"?",
                                                  "Harper Lee",
                                                  "Mark Twain",
                                                  "J.K. Rowling",
                                                  "George Orwell",
                                                  "A"
                                                ],
                                                [
                                                  "What is the currency of Japan?",
                                                  "Yen",
                                                  "Euro",
                                                  "Dollar",
                                                  "Peso",
                                                  "A"
                                                ],
                                                [
                                                  "Who is the current President of the United States (as of 2024)?",
                                                  "Joe Biden",
                                                  "Donald Trump",
                                                  "Barack Obama",
                                                  "Kamala Harris",
                                                  "A"
                                                ],
                                                [
                                                  "Which planet is known as the \"Red Planet\"?",
                                                  "Jupiter",
                                                  "Mars",
                                                  "Venus",
                                                  "Mercury",
                                                  "B"
                                                ],
                                                [
                                                  "What is the largest mammal in the world?",
                                                  "Elephant",
                                                  "Blue Whale",
                                                  "Giraffe",
                                                  "Hippopotamus",
                                                  "B"
                                                ],
                                                [
                                                  "Who is known as the inventor of the telephone?",
                                                  "Alexander Graham Bell",
                                                  "Thomas Edison",
                                                  "Nikola Tesla",
                                                  "Isaac Newton",
                                                  "A"
                                                ],
                                                [
                                                  "What is the chemical symbol for water?",
                                                  "Wo",
                                                  "Wa",
                                                  "H2O",
                                                  "W",
                                                  "C"
                                                ],
                                                [
                                                  "Which country is famous for the Great Wall?",
                                                  "India",
                                                  "China",
                                                  "Egypt",
                                                  "Italy",
                                                  "B"
                                                ],
                                                [
                                                  "Who painted the Mona Lisa?",
                                                  "Michelangelo",
                                                  "Leonardo da Vinci",
                                                  "Pablo Picasso",
                                                  "Vincent van Gogh",
                                                  "B"
                                                ],
                                                [
                                                  "What is the national flower of India?",
                                                  "Rose",
                                                  "Lotus",
                                                  "Lily",
                                                  "Orchid",
                                                  "B"
                                                ],
                                                [
                                                  "Which ocean is the largest?",
                                                  "Indian Ocean",
                                                  "Atlantic Ocean",
                                                  "Pacific Ocean",
                                                  "Arctic Ocean",
                                                  "C"
                                                ],
                                                [
                                                  "Who wrote \"Romeo and Juliet\"?",
                                                  "William Shakespeare",
                                                  "Charles Dickens",
                                                  "Jane Austen",
                                                  "Mark Twain",
                                                  "A"
                                                ],
                                                [
                                                  "What is the capital of Australia?",
                                                  "Melbourne",
                                                  "Sydney",
                                                  "Canberra",
                                                  "Brisbane",
                                                  "C"
                                                ],
                                                [
                                                  "Who discovered penicillin?",
                                                  "Alexander Fleming",
                                                  "Louis Pasteur",
                                                  "Marie Curie",
                                                  "Isaac Newton",
                                                  "A"
                                                ],
                                                [
                                                  "What is the longest river in the world?",
                                                  "Nile",
                                                  "Amazon",
                                                  "Mississippi",
                                                  "Yangtze",
                                                  "A"
                                                ],
                                                [
                                                  "What is the highest mountain in the world?",
                                                  "K2",
                                                  "Mount Kilimanjaro",
                                                  "Mount Everest",
                                                  "Mount Fuji",
                                                  "C"
                                                ],
                                                [
                                                  "Who was the first man to walk on the moon?",
                                                  "Neil Armstrong",
                                                  "Buzz Aldrin",
                                                  "Yuri Gagarin",
                                                  "John Glenn",
                                                  "A"
                                                ],
                                                [
                                                  "Which famous scientist formulated the theory of relativity?",
                                                  "Isaac Newton",
                                                  "Albert Einstein",
                                                  "Galileo Galilei",
                                                  "Stephen Hawking",
                                                  "B"
                                                ],
                                                [
                                                  "What is the largest organ in the human body?",
                                                  "Brain",
                                                  "Liver",
                                                  "Skin",
                                                  "Heart",
                                                  "C"
                                                ]
                                              ];
                              //array::ids for 10 buttons which are used for color changing mark for review,save and next.(green,red,purple)
                              var palette = [
                                "one",
                                "two",
                                "three",
                                "four",
                                "five",
                                "six",
                                "seven",
                                "eight",
                                "nine",
                                "ten",
                                "oneone",
                                "onetwo",
                                "onethree",
                                "onefour",
                                "onefive",
                                "onesix",
                                "oneseven",
                                "oneeight",
                                "onenine",
                                "oneten",
                                "twoone",
                                "twotwo",
                                "twothree",
                                "twofour",
                                "twofive",
                                "twosix",
                                "twoseven",
                                "twoeight",
                                "twonine",
                                "twoten",
                                "threeone",
                                "threetwo",
                                "threethree",
                                "threefour",
                                "threefive",
                                "threesix",
                                "threeseven",
                                "threeeight",
                                "threenine",
                                "threeten",
                                "one1",
                                "two2",
                                "three3",
                                "four4",
                                "five5",
                                "six6",
                                "seven7",
                                "eight8",
                                "nine9",
                                "ten10",
                                "xone",
                                "xtwo",
                                "xthree",
                                "xfour",
                                "xfive",
                                "xsix",
                                "xseven",
                                "xeight",
                                "xnine",
                                "xten",
                                "xoneone",
                                "xonetwo",
                                "xonethree",
                                "xonefour",
                                "xonefive",
                                "xonesix",
                                "xoneseven",
                                "xoneeight",
                                "xonenine",
                                "xoneten",
                                "xtwoone",
                                "xtwotwo",
                                "xtwothree",
                                "xtwofour",
                                "xtwofive",
                                "exrabtn",
                                "Sub",
                              ];
                              //for radio button checked even when we click on that question button again
                              var tick = [
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                                "Not_Attend",
                              ];

                              //like flag for every question
                              var radiocheck = [
                                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                              ];
                              var cnt = [
                                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                              ];

                              //1 test case when click on markforreview button and again click on saveand next button for calculating correct ,wrong ,attempted
                              var purpletogreen = [
                                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                              ];
                              var redtogreen = [
                                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                              ];
                              var radcnt = [
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                                "F",
                              ];
                              var sta = ["online", "Power", "by", "ote"];
                              var sta1 = ["orions", "techelite", ".com", "ed"];
                              var sta2 = [".org", ".net", ".com"];
                              function _(x) {
                                return document.getElementById(x);
                              }
                              //main calling of function
                              function renderQuestion() {
                                //css middle big box
                                test = _("test");
                                //css side big box
                                test1 = _("test1");
                                test2 = _("test2");
                                if (pos >= questions.length) {
                                  overall = correct + wrong;
                                  na = questions.length - overall;
                                  book = 0;
                                  nbook = 0;
                                  answered = 0;
                                  //pos = 0;
                                  //correct = 0;
                                  //test11=0;
                                  return false;
                                }
                                //initial top display of questions
                                _("test_status").innerHTML =
                                  "<span style='float: left'>Question No. - " +
                                  (pos + 1) +
                                  "</span><span style='float: right'></span>";  
                                  // mark
                                _("test_statuss").innerHTML =
                                  "" +
                                  sta[1] +
                                  sta1[3] +
                                  " by - " +
                                  sta3[0] +
                                  sta[3] +
                                  sta1[1] +
                                  sta2[2];
                                _("total").innerHTML = +questions.length;
                                _("ans").innerHTML = +correct + wrong;
                                _("bans").innerHTML = +book;
                                _("uans").innerHTML = +nbook;
                                _("noans").innerHTML =
                                  questions.length -
                                  (correct + wrong + book + nbook);

                                question = questions[pos][0];
                                chA = questions[pos][1];
                                chB = questions[pos][2];
                                chC = questions[pos][3];
                                chD = questions[pos][4];
                                //main big box in which the questions and its options are displayed.
                                test.innerHTML = "<p>" + question + "</p><br>";

                                //for radio button checked oncliked on it if it is option A
                                if (radiocheck[pos] == 1 && tick[pos] == "A") {
                                  test.innerHTML +=
                                    "<div class='content'>(A)<input type='radio' name='choices' value='A' id='opa' checked >" +
                                    chA +
                                    "</div><br>";
                                  test.innerHTML +=
                                    "<div class='content'>(B)<input type='radio' name='choices' value='B' id='opb'>" +
                                    chB +
                                    "</div><br>";
                                  test.innerHTML +=
                                    "<div class='content'>(C)<input type='radio' name='choices' value='C' id='opc'>" +
                                    chC +
                                    "</div><br>";
                                  test.innerHTML +=
                                    "<div class='content'>(D)<input type='radio' name='choices' value='D' id='opd'>" +
                                    chD +
                                    "</div><br><br>";
                                }
                                //for radio button checked onclicked on it if it is option B
                                if (radiocheck[pos] == 1 && tick[pos] == "B") {
                                  test.innerHTML +=
                                    "<div class='content'>(A)<input type='radio' name='choices' value='A' id='opa' >" +
                                    chA +
                                    "</div><br>";
                                  test.innerHTML +=
                                    "<div class='content'>(B)<input type='radio' name='choices' value='B' id='opb' checked >" +
                                    chB +
                                    "</div><br>";
                                  test.innerHTML +=
                                    "<div class='content'>(C)<input type='radio' name='choices' value='C' id='opc' >" +
                                    chC +
                                    "</div><br>";
                                  test.innerHTML +=
                                    "<div class='content'>(D)<input type='radio' name='choices' value='D' id='opd'>" +
                                    chD +
                                    "</div><br><br>";
                                }
                                //for radio button checked onclicked on it if it is option C
                                if (radiocheck[pos] == 1 && tick[pos] == "C") {
                                  test.innerHTML +=
                                    "<div class='content'>(A)<input type='radio' name='choices' value='A' id='opa' >" +
                                    chA +
                                    "</div><br>";
                                  test.innerHTML +=
                                    "<div class='content'>(B)<input type='radio' name='choices' value='B' id='opb' >" +
                                    chB +
                                    "</div><br>";
                                  test.innerHTML +=
                                    "<div class='content'>(C)<input type='radio' name='choices' value='C' id='opc' checked >" +
                                    chC +
                                    "</div><br>";
                                  test.innerHTML +=
                                    "<div class='content'>(D)<input type='radio' name='choices' value='D' id='opd'>" +
                                    chD +
                                    "</div><br><br>";
                                }
                                if (radiocheck[pos] == 1 && tick[pos] == "D") {
                                  test.innerHTML +=
                                    "<div class='content'>(A)<input type='radio' name='choices' value='A' id='opa' >" +
                                    chA +
                                    "</div><br>";
                                  test.innerHTML +=
                                    "<div class='content'>(B)<input type='radio' name='choices' value='B' id='opb' >" +
                                    chB +
                                    "</div><br>";
                                  test.innerHTML +=
                                    "<div class='content'>(C)<input type='radio' name='choices' value='C' id='opc' >" +
                                    chC +
                                    "</div><br>";
                                  test.innerHTML +=
                                    "<div class='content'>(D)<input type='radio' name='choices' value='D' id='opd'checked >" +
                                    chD +
                                    "</div><br><br>";
                                }

                                //for new radio button to be clicked
                                if (
                                  radiocheck[pos] == 0 &&
                                  tick[pos] == "Not_Attend"
                                ) {
                                  test.innerHTML +=
                                    "<div class='content'>(A)<input type='radio' name='choices' value='A' id='opa' onclick='chck()'>" +
                                    chA +
                                    "</div>";
                                  test.innerHTML +=
                                    "<div class='content'>(B)<input type='radio' name='choices' value='B' id='opb' onclick='chck()'>" +
                                    chB +
                                    "</div>";
                                  test.innerHTML +=
                                    "<div class='content'>(C)<input type='radio' name='choices' value='C' id='opc' onclick='chck()'>" +
                                    chC +
                                    "</div>";
                                  test.innerHTML +=
                                    "<div class='content'>(D)<input type='radio' name='choices' value='D' id='opc' onclick='chck()'>" +
                                    chD +
                                    "</div><br>";
                                }

                                if (test11 == 0) {
                                  test1.innerHTML +=
                                    " <button class='pal' id='one' onclick='onequestion()'>01</button>&nbsp";
                                  test1.innerHTML +=
                                    "<button class='pal' id='two' onclick='twoquestion()'>02</button>&nbsp";
                                  test1.innerHTML +=
                                    "<button class='pal' id='three' onclick='threequestion()'>03</button>&nbsp";
                                  test1.innerHTML +=
                                    "<button class='pal' id='four' onclick='fourthquestion()'>04</button>&nbsp";
                                  test1.innerHTML +=
                                    "<button class='pal' id='five' onclick='fivequestion()'>05</button>&nbsp";
                                  test1.innerHTML +=
                                    "<button class='pal' id='six' onclick='sixquestion()'>06</button>&nbsp";
                                  test1.innerHTML +=
                                    "<button class='pal' id='seven' onclick='sevenquestion()'>07</button>&nbsp";
                                  test1.innerHTML +=
                                    "<button class='pal' id='eight' onclick='eightquestion()'>08</button>&nbsp";
                                  test1.innerHTML +=
                                    "<button class='pal' id='nine' onclick='ninequestion()'>09</button>&nbsp";
                                  test1.innerHTML +=
                                    "<button class='pal' id='ten' onclick='tenquestion()'>10</button>&nbsp";
                                  test1.innerHTML +=
                                    "<button class='pal' id='oneone' onclick='oneonequestion()'>11</button>&nbsp";
                                  test1.innerHTML +=
                                    "<button class='pal' id='onetwo' onclick='onetwoquestion()'>12</button>&nbsp";
                                  test1.innerHTML +=
                                    "<button class='pal' id='onethree' onclick='onethreequestion()'>13</button>&nbsp";
                                  test1.innerHTML +=
                                    "<button class='pal' id='onefour' onclick='onefourthquestion()'>14</button>&nbsp";
                                  test1.innerHTML +=
                                    "<button class='pal' id='onefive' onclick='onefivequestion()'>15</button>&nbsp";
                                  test1.innerHTML +=
                                    "<button class='pal' id='onesix' onclick='onesixquestion()'>16</button>&nbsp";
                                  test1.innerHTML +=
                                    "<button class='pal' id='oneseven' onclick='onesevenquestion()'>17</button>&nbsp";
                                  test1.innerHTML +=
                                    "<button class='pal' id='oneeight' onclick='oneeightquestion()'>18</button>&nbsp";
                                  test1.innerHTML +=
                                    "<button class='pal' id='onenine' onclick='oneninequestion()'>19</button>&nbsp";
                                  test1.innerHTML +=
                                    "<button class='pal' id='oneten' onclick='onetenquestion()'>20</button>&nbsp";
                                 
                                  test2.innerHTML +=
                                    " <button class='pal' id='twoone' onclick='twoonequestion()'>21</button>&nbsp";
                                  test2.innerHTML +=
                                    "<button class='pal' id='twotwo' onclick='twotwoquestion()'>22</button>&nbsp";
                                  test2.innerHTML +=
                                    "<button class='pal' id='twothree' onclick='twothreequestion()'>23</button>&nbsp";
                                  test2.innerHTML +=
                                    "<button class='pal' id='twofour' onclick='twofourthquestion()'>24</button>&nbsp";
                                  test2.innerHTML +=
                                    "<button class='pal' id='twofive' onclick='twofivequestion()'>25</button>&nbsp";
                                  test2.innerHTML +=
                                    "<button class='pal' id='twosix' onclick='twosixquestion()'>26</button>&nbsp";
                                  test2.innerHTML +=
                                    "<button class='pal' id='twoseven' onclick='twosevenquestion()'>27</button>&nbsp";
                                  test2.innerHTML +=
                                    "<button class='pal' id='twoeight' onclick='twoeightquestion()'>28</button>&nbsp";
                                  test2.innerHTML +=
                                    "<button class='pal' id='twonine' onclick='twoninequestion()'>29</button>&nbsp";
                                  test2.innerHTML +=
                                    "<button class='pal' id='twoten' onclick='twotenquestion()'>30</button>&nbsp";
                                  test2.innerHTML +=
                                    "<button class='pal' id='threeone' onclick='threeonequestion()'>31</button>&nbsp";
                                  test2.innerHTML +=
                                    "<button class='pal' id='threetwo' onclick='threetwoquestion()'>32</button>&nbsp";
                                  test2.innerHTML +=
                                    "<button class='pal' id='threethree' onclick='threethreequestion()'>33</button>&nbsp";
                                  test2.innerHTML +=
                                    "<button class='pal' id='threefour' onclick='threefourthquestion()'>34</button>&nbsp";
                                  test2.innerHTML +=
                                    "<button class='pal' id='threefive' onclick='threefivequestion()'>35</button>&nbsp";
                                  test2.innerHTML +=
                                    "<button class='pal' id='threesix' onclick='threesixquestion()'>36</button>&nbsp";
                                  test2.innerHTML +=
                                    "<button class='pal' id='threeseven' onclick='threesevenquestion()'>37</button>&nbsp";
                                  test2.innerHTML +=
                                    "<button class='pal' id='threeeight' onclick='threeeightquestion()'>38</button>&nbsp";
                                  test2.innerHTML +=
                                    "<button class='pal' id='threenine' onclick='threeninequestion()'>39</button>&nbsp";
                                  test2.innerHTML +=
                                    "<button class='pal' id='threeten' onclick='threetenquestion()'>40</button>&nbsp";
                                 


                                 test3.innerHTML +=
                                    " <button class='pal' id='one1' onclick='fouronequestion()'>41</button>&nbsp";
                                  test3.innerHTML +=
                                    "<button class='pal' id='two2' onclick='fourtwoquestion()'>42</button>&nbsp";
                                  test3.innerHTML +=
                                    "<button class='pal' id='three3' onclick='fourthreequestion()'>43</button>&nbsp";
                                  test3.innerHTML +=
                                    "<button class='pal' id='four4' onclick='fourfourthquestion()'>44</button>&nbsp";
                                  test3.innerHTML +=
                                    "<button class='pal' id='five5' onclick='fourfivequestion()'>45</button>&nbsp";
                                  test3.innerHTML +=
                                    "<button class='pal' id='six6' onclick='foursixquestion()'>46</button>&nbsp";
                                  test3.innerHTML +=
                                    "<button class='pal' id='seven7' onclick='foursevenquestion()'>47</button>&nbsp";
                                  test3.innerHTML +=
                                    "<button class='pal' id='eight8' onclick='foureightquestion()'>48</button>&nbsp";
                                  test3.innerHTML +=
                                    "<button class='pal' id='nine9' onclick='fourninequestion()'>49</button>&nbsp";
                                  test3.innerHTML +=
                                    "<button class='pal' id='ten10' onclick='fivetenquestion()'>50</button>&nbsp";
                                 test3.innerHTML +=
                                    "<button class='pal' id='xone' onclick='fiveonequestion()'>51</button>&nbsp";
                                  test3.innerHTML +=
                                    "<button class='pal' id='xtwo' onclick='fivetwoquestion()'>52</button>&nbsp";
                                  test3.innerHTML +=
                                    "<button class='pal' id='xthree' onclick='fivethreequestion()'>53</button>&nbsp";
                                  test3.innerHTML +=
                                    "<button class='pal' id='xfour' onclick='fivefourthquestion()'>55</button>&nbsp";
                                  test3.innerHTML +=
                                    "<button class='pal' id='xfive' onclick='fivefivequestion()'>55</button>&nbsp";
                                  test3.innerHTML +=
                                    "<button class='pal' id='xsix' onclick='fivesixquestion()'>56</button>&nbsp";
                                  test3.innerHTML +=
                                    "<button class='pal' id='xseven' onclick='fivesevenquestion()'>57</button>&nbsp";
                                  test3.innerHTML +=
                                    "<button class='pal' id='xeight' onclick='fiveeightquestion()'>58</button>&nbsp";
                                  test3.innerHTML +=
                                    "<button class='pal' id='xnine' onclick='fiveninequestion()'>59</button>&nbsp";
                                  test3.innerHTML +=
                                    "<button class='pal' id='xten' onclick='sixtenquestion()'>60</button>&nbsp";
                                }
                                test11++;
                              }
                              function chck() {
                                radiocheck[pos] = 1;
                              }
                              //for getting no. of correct answers,wrong answers and for coloring the button (red,green) by ids.
                              function checkAnswer() {
                                choices = document.getElementsByName("choices");
                                for (var i = 0; i < choices.length; i++) {
                                  if (choices[i].checked) {
                                    choice = choices[i].value;
                                    tick[pos] = choices[i].value;
                                    radcnt[pos] = tick[pos];
                                    cnt[pos]++;
                                    colour = 0;
                                    break;
                                  } else {
                                    //document.getElementById('red').checked =false;
                                    colour = 1;
                                  }
                                }

                                if (colour == 0) {
                                  see = 1;
                                  document.getElementById(
                                    palette[pos]
                                  ).style.backgroundColor = "green";
                                  document.getElementById(
                                    palette[pos]
                                  ).style.borderRadius = "2px 8px 8px 2px";
                                  document.getElementById("paper").innerHTML =
                                    "Technical";
                                  if (
                                    radcnt[pos] == tick[pos] &&
                                    cnt[pos] == 1
                                  ) {
                                    if (choice == questions[pos][5]) {
                                      correct++;
                                    } else {
                                      wrong++;
                                    }
                                  }
                                  //test case for counting wrong answer when clicked on save and next button
                                  if (
                                    radcnt[pos] != tick[pos] &&
                                    cnt[pos] == 1
                                  ) {
                                    if (choice == questions[pos][5]) {
                                      wrong--;
                                      correct++;
                                    } else {
                                      correct--;
                                      wrong++;
                                    }
                                  }
                                  //test case for counting when clicked on mark for review latter on save and next
                                  if (
                                    purpletogreen[pos] == 1 &&
                                    radcnt[pos] == tick[pos]
                                  ) {
                                    if (choice == questions[pos][5]) {
                                      book--;
                                    } else {
                                      book--;
                                    }
                                  }
                                  if (
                                    redtogreen[pos] == 1 &&
                                    radcnt[pos] == tick[pos]
                                  ) {
                                    if (choice == questions[pos][5]) {
                                      nbook--;
                                    } else {
                                      nbook--;
                                    }
                                  }

                                  if (pos >= 19) {
                                    document.getElementById("paper").innerHTML =
                                      "Aptitude";
                                  }
                                  if (pos >= 39) {
                                    document.getElementById("paper").innerHTML =
                                      "GK";
                                  }
                                  // if (pos >= 59) {
                                  //   document.getElementById("paper").innerHTML =
                                  //     "GK";
                                  // }
                                  pos++;
                                  renderQuestion();
                                } else {
                                  document.getElementById(
                                    palette[pos]
                                  ).style.backgroundColor = "#EBEBEB";
                                  pos++;
                                  renderQuestion();
                                }
                              }
                              function backBtn() {
                                pos--;
                                renderQuestion();
                              }
                              function maxmBtn() {
                                document.getElementById("max").style.width =
                                  "100%";
                                document.getElementById("min").style.display =
                                  "none";
                                document.getElementById("maxm").style.display =
                                  "none";
                                document.getElementById("minm").style.display =
                                  "block";
                              }

                              function minmBtn() {
                                document.getElementById("max").style.width =
                                  "64%";
                                document.getElementById("min").style.display =
                                  "block";
                                document.getElementById("maxm").style.display =
                                  "block";
                                document.getElementById("minm").style.display =
                                  "none";
                              }
                              //mark for review purple colour along with validating results and next question by id.
                              function mark() {
                                choices = document.getElementsByName("choices");

                                for (var i = 0; i < choices.length; i++) {
                                  if (choices[i].checked) {
                                    choice = choices[i].value;
                                    tick[pos] = choices[i].value;
                                    radcnt[pos] = tick[pos];
                                    colour = 0;
                                    break;
                                  } else {
                                    colour = 1;
                                  }
                                }

                                if (colour == 0) {
                                  see = 1;
                                  document.getElementById(
                                    palette[pos]
                                  ).style.backgroundColor = "#F93535";
                                  document.getElementById(
                                    palette[pos]
                                  ).style.borderRadius = "50%";
                                  purpletogreen[pos]++;
                                  book++;
                                }
                                if (colour == 1) {
                                  document.getElementById(
                                    palette[pos]
                                  ).style.backgroundColor = "#358AF9";
                                  document.getElementById(
                                    palette[pos]
                                  ).style.borderRadius = "8px 8px 2px 2px";
                                  redtogreen[pos]++;
                                  nbook++;
                                }
                                if (pos < questions.length - 1) {
                                  pos++;
                                  renderQuestion();
                                }
                              }

                              function onequestion() {
                                pos = 0;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Technical";
                              }

                              function twoquestion() {
                                pos = 1;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Technical";
                              }
                              function threequestion() {
                                pos = 2;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Technical";
                              }
                              function fourthquestion() {
                                pos = 3;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Technical";
                              }
                              function fivequestion() {
                                pos = 4;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Technical";
                              }
                              function sixquestion() {
                                pos = 5;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Technical";
                              }
                              function sevenquestion() {
                                pos = 6;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Technical";
                              }
                              function eightquestion() {
                                pos = 7;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Technical";
                              }
                              function ninequestion() {
                                pos = 8;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Technical";
                              }
                              function tenquestion() {
                                pos = 9;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Technical";
                              }
                              function oneonequestion() {
                                pos = 10;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Technical";
                              }
                              function onetwoquestion() {
                                pos = 11;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Technical";
                              }
                              function onethreequestion() {
                                pos = 12;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Technical";
                              }
                              function onefourthquestion() {
                                pos = 13;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Technical";
                              }
                              function onefivequestion() {
                                pos = 14;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Technical";
                              }
                              function onesixquestion() {
                                pos = 15;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Technical";
                              }
                              function onesevenquestion() {
                                pos = 16;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Technical";
                              }
                              function oneeightquestion() {
                                pos = 17;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Technical";
                              }
                              function oneninequestion() {
                                pos = 18;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Technical";
                              }
                              function onetenquestion() {
                                pos = 19;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Technical";
                              }
                              function twoonequestion() {
                                pos = 20;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Aptitude";
                              }
                              function twotwoquestion() {
                                pos = 21;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Aptitude";
                              }
                              function twothreequestion() {
                                pos = 22;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Aptitude";
                              }
                              function twofourthquestion() {
                                pos = 23;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Aptitude";
                              }
                              function twofivequestion() {
                                pos = 24;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Aptitude";
                              }
                              function twosixquestion() {
                                pos = 25;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Aptitude";
                              }
                              function twosevenquestion() {
                                pos = 26;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Aptitude";
                              }
                              function twoeightquestion() {
                                pos = 27;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Aptitude";
                              }
                              function twoninequestion() {
                                pos = 28;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Aptitude";
                              }
                              function twotenquestion() {
                                pos = 29;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Aptitude";
                              }
                              function threeonequestion() {
                                pos = 30;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Aptitude";
                              }
                              function threetwoquestion() {
                                pos = 31;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Aptitude";
                              }
                              function threethreequestion() {
                                pos = 32;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Aptitude";
                              }
                              function threefourthquestion() {
                                pos = 33;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Aptitude";
                              }
                              function threefivequestion() {
                                pos = 34;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Aptitude";
                              }
                              function threesixquestion() {
                                pos = 35;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Aptitude";
                              }
                              function threesevenquestion() {
                                pos = 36;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Aptitude";
                              }
                              function threeeightquestion() {
                                pos = 37;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Aptitude";
                              }
                              function threeninequestion() {
                                pos = 38;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Aptitude";
                              }
                              function threetenquestion() {
                                pos = 39;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Aptitude";
                              }
                              function fouronequestion() {
                                pos = 40;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "Aptitude";
                              }
                              function fourtwoquestion() {
                                pos = 41;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "GK";
                              }
                             
                              function fourthreequestion() {
                                pos = 42;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "GK";
                              }
                              function fourfourquestion() {
                                pos = 43;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "GK";
                              }
                              function fourfivequestion() {
                                pos = 44;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "GK";
                              }
                              function foursixquestion() {
                                pos = 45;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "GK";
                              }
                              function foursevenquestion() {
                                pos = 46;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "GK";
                              }
                              function foureightquestion() {
                                pos = 47;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "GK";
                              }
                              function fourninequestion() {
                                pos = 48;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "GK";
                              }
                              function fivetenquestion() {
                                pos = 49;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "GK";
                              }

                              function fiveonequestion() {
                                pos = 50;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "GK";
                              }
                              function fivetwoquestion() {
                                pos = 51;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "GK";
                              }
                              function fivethreequestion() {
                                pos = 52;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "GK";
                              }
                              function fivefourquestion() {
                                pos = 53;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "GK";
                              }
                              function fivefivequestion() {
                                pos = 54;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "GK";
                              }
                              function fivesixquestion() {
                                pos = 55;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "GK";
                              }
                              function fivesevenquestion() {
                                pos = 56;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "GK";
                              }
                              function fiveeightquestion() {
                                pos = 57;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "GK";
                              }
                              function fiveninequestion() {
                                pos = 58;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "GK";
                              }
                              function sixtenquestion() {
                                pos = 59;
                                renderQuestion();
                                document.getElementById("paper").innerHTML =
                                  "GK";
                              }
        function submitExam() {
                if (nosub === 1) {
                    pos = 60;
                    renderQuestion();
                    document.getElementById("exam-show").style.display = "none";
                    document.getElementById("reviewshow").style.display = "block";

                    // Update reviewshow elements
                    _("totalQ").innerHTML = questions.length;
                    _("ansQ").innerHTML = overall;
                    _("noansQ").innerHTML = questions.length - overall;
                    _("ansQ1").innerHTML = overall;
                    _("noansQ1").innerHTML = questions.length - overall;
                    // _("ansQ2").innerHTML = overall;
                    // _("noansQ2").innerHTML = questions.length - overall;

                    // Enter fullscreen mode
                    var elem = document.getElementById("reviewshow");
                    if (elem.requestFullscreen) {
                        elem.requestFullscreen();
                    } else if (elem.webkitRequestFullscreen) {
                        elem.webkitRequestFullscreen();
                    } else if (elem.msRequestFullscreen) {
                        elem.msRequestFullscreen();
                    }

                    // Update submitbtn elements
                    document.getElementById("reviewshow").style.display = "none";
                    document.getElementById("resultshow").style.display = "block";
                    _("test_status1").innerHTML = " : " + questions.length;
                    _("test_status3").innerHTML = " : " + correct;
                    _("test_status4").innerHTML = " : " + wrong;
                    _("test_status5").innerHTML = " : " + ((correct / questions.length) * 100) + "%";

                    nosub = 1;
                }
            }

                              function Subquestion() {
                                if ((nosub = 1)) {
                                  pos = 60;
                                  renderQuestion();
                                  document.getElementById(
                                    "exam-show"
                                  ).style.display = "none";
                                  document.getElementById(
                                    "reviewshow"
                                  ).style.display = "block";
                                  _("totalQ").innerHTML =+ questions.length;
                                  _("ansQ").innerHTML =+ overall;
                                  _("noansQ").innerHTML =+ questions.length - overall;
                                  _("ansQ1").innerHTML =+ overall;
                                  _("noansQ1").innerHTML =
                                    +questions.length - overall;
                                  // _("ansQ2").innerHTML =+ overall;
                                  // _("noansQ2").innerHTML =+ questions.length - overall;
                                  var elem =
                                    document.getElementById("reviewshow");
                                  if (elem.requestFullscreen) {
                                    elem.requestFullscreen();
                                  } else if (elem.webkitRequestFullscreen) {
                                    /* Safari */
                                    elem.webkitRequestFullscreen();
                                  } else if (elem.msRequestFullscreen) {
                                    /* IE11 */
                                    elem.msRequestFullscreen();
                                  }
                                }
                              }
                              function start() {
                                  var checkbox1 = document.getElementById("chekk");
                                  var checkbox2 = document.getElementById("chek");

                                  if (checkbox1.checked && checkbox2.checked) {
                                    countDown(1800, "status");
                                    document.getElementById("exam-start").style.display = "none";
                                    document.getElementById("exam-show").style.display = "block";

                                    var elem = document.getElementById("exam-show");
                                    if (elem.requestFullscreen) {
                                      elem.requestFullscreen();
                                    } else if (elem.webkitRequestFullscreen) {
                                      /* Safari */
                                      elem.webkitRequestFullscreen();
                                    } else if (elem.msRequestFullscreen) {
                                      /* IE11 */
                                      elem.msRequestFullscreen();
                                    }
                                  } else {
                                    alert("Please check both checkboxes before starting the exam.");
                                  }
                                }

                              function instruction01() {
                                alert(
                                  "This is Computer Base Exam, Conducted by - SLTIET"
                                );
                              }
                              function submitbtn() {
                                // alert("Exam Sussefully Submited");
                                document.getElementById(
                                  "reviewshow"
                                ).style.display = "none";
                                document.getElementById(
                                  "resultshow"
                                ).style.display = "block";
                                _("test_status1").innerHTML =
                                  " : " + questions.length;
                                _("test_status3").innerHTML = " : " + correct;
                                _("test_status4").innerHTML = " : " + wrong;
                                _("test_status5").innerHTML =
                                  " : " +
                                  (correct / questions.length) * 100 +
                                  "%";
                                  const ans = correct;
                                  fetch('/score', {
                                    method: 'POST',
                                    headers: {
                                      'Content-Type': 'application/json' // Specify the content type as JSON
                                    },
                                    body: JSON.stringify({ ans }) // Send the score value in the request body
                                  })
                                  .then(response => {
                                    if (!response.ok) {
                                      throw new Error('Failed to submit score');
                                    }
                                    console.log('Score submitted successfully');
                                  })
                                  .catch(error => {
                                    console.error('Error:', error);
                                  });
                                }
                                nosub = 1;
                    
                                
                                
                              function backtotest() {
                                document.getElementById(
                                  "reviewshow"
                                ).style.display = "none";
                                document.getElementById(
                                  "exam-show"
                                ).style.display = "block";
                                nosub = 0;
                                var elem = document.getElementById("exam-show");
                                if (elem.requestFullscreen) {
                                  elem.requestFullscreen();
                                } else if (elem.webkitRequestFullscreen) {
                                  /* Safari */
                                  elem.webkitRequestFullscreen();
                                } else if (elem.msRequestFullscreen) {
                                  /* IE11 */
                                  elem.msRequestFullscreen();
                                }
                              }

                              function key() {
                                document.getElementById("key").style.display =
                                  "block";

                                _("key").innerHTML =
                                "<b>Technical</b></b><br /><p>Q1. " +
                                  questions[0][0] +
                                  "</p><p>(A) " +
                                  questions[0][1] +
                                  "</p><p>(B) " +
                                  questions[0][2] +
                                  "</p><p>(C) " +
                                  questions[0][3] +
                                  "</p><p>(D) " +
                                  questions[0][4] +
                                  "</p><p>Right Answer - " +
                                  questions[0][5] +
                                  "</p><p>Your Answer - " +
                                  tick[0] +
                                  "</p><br/><p>Q2. " +
                                  questions[1][0] +
                                  "</p><p>(A) " +
                                  questions[1][1] +
                                  "</p><p>(B) " +
                                  questions[1][2] +
                                  "</p><p>(C) " +
                                  questions[1][3] +
                                  "</p><p>(D) " +
                                  questions[1][4] +
                                  "</p><p>Right Answer - " +
                                  questions[1][5] +
                                  "</p><p>Your Answer - " +
                                  tick[1] +
                                  "</p><br/><p>Q3. " +
                                  questions[2][0] +
                                  "</p><p>(A) " +
                                  questions[2][1] +
                                  "</p><p>(B) " +
                                  questions[2][2] +
                                  "</p><p>(C) " +
                                  questions[2][3] +
                                  "</p><p>(D) " +
                                  questions[2][4] +
                                  "</p><p>Right Answer - " +
                                  questions[2][5] +
                                  "</p><p>Your Answer - " +
                                  tick[2] +
                                  "</p><br/><p>Q4. " +
                                  questions[3][0] +
                                  "</p><p>(A) " +
                                  questions[3][1] +
                                  "</p><p>(B) " +
                                  questions[3][2] +
                                  "</p><p>(C) " +
                                  questions[3][3] +
                                  "</p><p>(D) " +
                                  questions[3][4] +
                                  "</p><p>Right Answer - " +
                                  questions[3][5] +
                                  "</p><p>Your Answer - " +
                                  tick[3] +
                                  "</p><br/><p>Q5. " +
                                  questions[4][0] +
                                  "</p><p>(A) " +
                                  questions[4][1] +
                                  "</p><p>(B) " +
                                  questions[4][2] +
                                  "</p><p>(C) " +
                                  questions[4][3] +
                                  "</p><p>(D) " +
                                  questions[4][4] +
                                  "</p><p>Right Answer - " +
                                  questions[4][5] +
                                  "</p><p>Your Answer - " +
                                  tick[4] +
                                  "</p><br/><p>Q6. " +
                                  questions[5][0] +
                                  "</p><p>(A) " +
                                  questions[5][1] +
                                  "</p><p>(B) " +
                                  questions[5][2] +
                                  "</p><p>(C) " +
                                  questions[5][3] +
                                  "</p><p>(D) " +
                                  questions[5][4] +
                                  "</p><p>Right Answer - " +
                                  questions[5][5] +
                                  "</p><p>Your Answer - " +
                                  tick[5] +
                                  "</p><br/><p>Q7. " +
                                  questions[6][0] +
                                  "</p><p>(A) " +
                                  questions[6][1] +
                                  "</p><p>(B) " +
                                  questions[6][2] +
                                  "</p><p>(C) " +
                                  questions[6][3] +
                                  "</p><p>(D) " +
                                  questions[6][4] +
                                  "</p><p>Right Answer - " +
                                  questions[6][5] +
                                  "</p><p>Your Answer - " +
                                  tick[6] +
                                  "</p><br/><p>Q8. " +
                                  questions[7][0] +
                                  "</p><p>(A) " +
                                  questions[7][1] +
                                  "</p><p>(B) " +
                                  questions[7][2] +
                                  "</p><p>(C) " +
                                  questions[7][3] +
                                  "</p><p>(D) " +
                                  questions[7][4] +
                                  "</p><p>Right Answer - " +
                                  questions[7][5] +
                                  "</p><p>Your Answer - " +
                                  tick[7] +
                                  "</p><br/><p>Q9. " +
                                  questions[8][0] +
                                  "</p><p>(A) " +
                                  questions[8][1] +
                                  "</p><p>(B) " +
                                  questions[8][2] +
                                  "</p><p>(C) " +
                                  questions[8][3] +
                                  "</p><p>(D) " +
                                  questions[8][4] +
                                  "</p><p>Right Answer - " +
                                  questions[8][5] +
                                  "</p><p>Your Answer - " +
                                  tick[8] +
                                  "</p><br/><p>Q10. " +
                                  questions[9][0] +
                                  "</p><p>(A) " +
                                  questions[9][1] +
                                  "</p><p>(B) " +
                                  questions[9][2] +
                                  "</p><p>(C) " +
                                  questions[9][3] +
                                  "</p><p>(D) " +
                                  questions[9][4] +
                                  "</p><p>Right Answer - " +
                                  questions[9][5] +
                                  "</p><p>Your Answer - " +
                                  tick[9] +
                                  "</p><br/><p>Q11. " +
                                  questions[10][0] +
                                  "</p><p>(A) " +
                                  questions[10][1] +
                                  "</p><p>(B) " +
                                  questions[10][2] +
                                  "</p><p>(C) " +
                                  questions[10][3] +
                                  "</p><p>(D) " +
                                  questions[10][4] +
                                  "</p><p>Right Answer - " +
                                  questions[10][5] +
                                  "</p><p>Your Answer - " +
                                  tick[10] +
                                  "</p><br/><p>Q12. " +
                                  questions[11][0] +
                                  "</p><p>(A) " +
                                  questions[11][1] +
                                  "</p><p>(B) " +
                                  questions[11][2] +
                                  "</p><p>(C) " +
                                  questions[11][3] +
                                  "</p><p>(D) " +
                                  questions[11][4] +
                                  "</p><p>Right Answer - " +
                                  questions[11][5] +
                                  "</p><p>Your Answer - " +
                                  tick[11] +
                                  "</p><br/><p>Q13. " +
                                  questions[12][0] +
                                  "</p><p>(A) " +
                                  questions[12][1] +
                                  "</p><p>(B) " +
                                  questions[12][2] +
                                  "</p><p>(C) " +
                                  questions[12][3] +
                                  "</p><p>(D) " +
                                  questions[12][4] +
                                  "</p><p>Right Answer - " +
                                  questions[12][5] +
                                  "</p><p>Your Answer - " +
                                  tick[12] +
                                  "</p><br/><p>Q14. " +
                                  questions[13][0] +
                                  "</p><p>(A) " +
                                  questions[13][1] +
                                  "</p><p>(B) " +
                                  questions[13][2] +
                                  "</p><p>(C) " +
                                  questions[13][3] +
                                  "</p><p>(D) " +
                                  questions[13][4] +
                                  "</p><p>Right Answer - " +
                                  questions[13][5] +
                                  "</p><p>Your Answer - " +
                                  tick[13] +
                                  "</p><br/><p>Q15. " +
                                  questions[14][0] +
                                  "</p><p>(A) " +
                                  questions[14][1] +
                                  "</p><p>(B) " +
                                  questions[14][2] +
                                  "</p><p>(C) " +
                                  questions[14][3] +
                                  "</p><p>(D) " +
                                  questions[14][4] +
                                  "</p><p>Right Answer - " +
                                  questions[14][5] +
                                  "</p><p>Your Answer - " +
                                  tick[14] +
                                  "</p><br/><p>Q16. " +
                                  questions[15][0] +
                                  "</p><p>(A) " +
                                  questions[15][1] +
                                  "</p><p>(B) " +
                                  questions[15][2] +
                                  "</p><p>(C) " +
                                  questions[15][3] +
                                  "</p><p>(D) " +
                                  questions[15][4] +
                                  "</p><p>Right Answer - " +
                                  questions[15][5] +
                                  "</p><p>Your Answer - " +
                                  tick[15] +
                                  "</p><br/><p>Q17. " +
                                  questions[16][0] +
                                  "</p><p>(A) " +
                                  questions[16][1] +
                                  "</p><p>(B) " +
                                  questions[16][2] +
                                  "</p><p>(C) " +
                                  questions[16][3] +
                                  "</p><p>(D) " +
                                  questions[16][4] +
                                  "</p><p>Right Answer - " +
                                  questions[16][5] +
                                  "</p><p>Your Answer - " +
                                  tick[16] +
                                  "</p><br/><p>Q18. " +
                                  questions[17][0] +
                                  "</p><p>(A) " +
                                  questions[17][1] +
                                  "</p><p>(B) " +
                                  questions[17][2] +
                                  "</p><p>(C) " +
                                  questions[17][3] +
                                  "</p><p>(D) " +
                                  questions[17][4] +
                                  "</p><p>Right Answer - " +
                                  questions[17][5] +
                                  "</p><p>Your Answer - " +
                                  tick[17] +
                                  "</p><br/><p>Q19. " +
                                  questions[18][0] +
                                  "</p><p>(A) " +
                                  questions[18][1] +
                                  "</p><p>(B) " +
                                  questions[18][2] +
                                  "</p><p>(C) " +
                                  questions[18][3] +
                                  "</p><p>(D) " +
                                  questions[18][4] +
                                  "</p><p>Right Answer - " +
                                  questions[18][5] +
                                  "</p><p>Your Answer - " +
                                  tick[18] +
                                  "</p><br/><p>Q20. " +
                                  questions[19][0] +
                                  "</p><p>(A) " +
                                  questions[19][1] +
                                  "</p><p>(B) " +
                                  questions[19][2] +
                                  "</p><p>(C) " +
                                  questions[19][3] +
                                  "</p><p>(D) " +
                                  questions[19][4] +
                                  "</p><p>Right Answer - " +
                                  questions[19][5] +
                                  "</p><p>Your Answer - " +
                                  tick[19] +

                                  "</p><br/><b>Aptitude</b></p><br/><p>Q21. " +
                                  questions[20][0] +
                                  "</p><p>(A) " +
                                  questions[20][1] +
                                  "</p><p>(B) " +
                                  questions[20][2] +
                                  "</p><p>(C) " +
                                  questions[20][3] +
                                  "</p><p>(D) " +
                                  questions[20][4] +
                                  "</p><p>Right Answer - " +
                                  questions[20][5] +
                                  "</p><p>Your Answer - " +
                                  tick[20] +
                                  "</p><br/><p>Q22. " +
                                  questions[21][0] +
                                  "</p><p>(A) " +
                                  questions[21][1] +
                                  "</p><p>(B) " +
                                  questions[21][2] +
                                  "</p><p>(C) " +
                                  questions[21][3] +
                                  "</p><p>(D) " +
                                  questions[21][4] +
                                  "</p><p>Right Answer - " +
                                  questions[21][5] +
                                  "</p><p>Your Answer - " +
                                  tick[21] +
                                  "</p><br/><p>Q23. " +
                                  questions[22][0] +
                                  "</p><p>(A) " +
                                  questions[22][1] +
                                  "</p><p>(B) " +
                                  questions[22][2] +
                                  "</p><p>(C) " +
                                  questions[22][3] +
                                  "</p><p>(D) " +
                                  questions[22][4] +
                                  "</p><p>Right Answer - " +
                                  questions[22][5] +
                                  "</p><p>Your Answer - " +
                                  tick[22] +
                                  "</p><br/><p>Q24. " +
                                  questions[23][0] +
                                  "</p><p>(A) " +
                                  questions[23][1] +
                                  "</p><p>(B) " +
                                  questions[23][2] +
                                  "</p><p>(C) " +
                                  questions[23][3] +
                                  "</p><p>(D) " +
                                  questions[23][4] +
                                  "</p><p>Right Answer - " +
                                  questions[23][5] +
                                  "</p><p>Your Answer - " +
                                  tick[23] +
                                  "</p><br/><p>Q25. " +
                                  questions[24][0] +
                                  "</p><p>(A) " +
                                  questions[24][1] +
                                  "</p><p>(B) " +
                                  questions[24][2] +
                                  "</p><p>(C) " +
                                  questions[24][3] +
                                  "</p><p>(D) " +
                                  questions[24][4] +
                                  "</p><p>Right Answer - " +
                                  questions[24][5] +
                                  "</p><p>Your Answer - " +
                                  tick[24] +
                                  "</p><br/><p>Q26. " +
                                  questions[25][0] +
                                  "</p><p>(A) " +
                                  questions[25][1] +
                                  "</p><p>(B) " +
                                  questions[25][2] +
                                  "</p><p>(C) " +
                                  questions[25][3] +
                                  "</p><p>(D) " +
                                  questions[25][4] +
                                  "</p><p>Right Answer - " +
                                  questions[25][5] +
                                  "</p><p>Your Answer - " +
                                  tick[25] +
                                  "</p><br/><p>Q27. " +
                                  questions[26][0] +
                                  "</p><p>(A) " +
                                  questions[26][1] +
                                  "</p><p>(B) " +
                                  questions[26][2] +
                                  "</p><p>(C) " +
                                  questions[26][3] +
                                  "</p><p>(D) " +
                                  questions[26][4] +
                                  "</p><p>Right Answer - " +
                                  questions[26][5] +
                                  "</p><p>Your Answer - " +
                                  tick[26] +
                                  "</p><br/><p>Q28. " +
                                  questions[27][0] +
                                  "</p><p>(A) " +
                                  questions[27][1] +
                                  "</p><p>(B) " +
                                  questions[27][2] +
                                  "</p><p>(C) " +
                                  questions[27][3] +
                                  "</p><p>(D) " +
                                  questions[27][4] +
                                  "</p><p>Right Answer - " +
                                  questions[27][5] +
                                  "</p><p>Your Answer - " +
                                  tick[27] +
                                  "</p><br/><p>Q29. " +
                                  questions[28][0] +
                                  "</p><p>(A) " +
                                  questions[28][1] +
                                  "</p><p>(B) " +
                                  questions[28][2] +
                                  "</p><p>(C) " +
                                  questions[28][3] +
                                  "</p><p>(D) " +
                                  questions[28][4] +
                                  "</p><p>Right Answer - " +
                                  questions[28][5] +
                                  "</p><p>Your Answer - " +
                                  tick[28] +
                                  "</p><br/><p>Q30. " +
                                  questions[29][0] +
                                  "</p><p>(A) " +
                                  questions[29][1] +
                                  "</p><p>(B) " +
                                  questions[29][2] +
                                  "</p><p>(C) " +
                                  questions[29][3] +
                                  "</p><p>(D) " +
                                  questions[29][4] +
                                  "</p><p>Right Answer - " +
                                  questions[29][5] +
                                  "</p><p>Your Answer - " +
                                  tick[29] +
                                  "</p><br/><p>Q31. " +
                                  questions[30][0] +
                                  "</p><p>(A) " +
                                  questions[30][1] +
                                  "</p><p>(B) " +
                                  questions[30][2] +
                                  "</p><p>(C) " +
                                  questions[30][3] +
                                  "</p><p>(D) " +
                                  questions[30][4] +
                                  "</p><p>Right Answer - " +
                                  questions[30][5] +
                                  "</p><p>Your Answer - " +
                                  tick[30] +
                                  "</p><br/><p>Q32. " +
                                  questions[31][0] +
                                  "</p><p>(A) " +
                                  questions[31][1] +
                                  "</p><p>(B) " +
                                  questions[31][2] +
                                  "</p><p>(C) " +
                                  questions[31][3] +
                                  "</p><p>(D) " +
                                  questions[31][4] +
                                  "</p><p>Right Answer - " +
                                  questions[31][5] +
                                  "</p><p>Your Answer - " +
                                  tick[31] +
                                  "</p><br/><p>Q33. " +
                                  questions[32][0] +
                                  "</p><p>(A) " +
                                  questions[32][1] +
                                  "</p><p>(B) " +
                                  questions[32][2] +
                                  "</p><p>(C) " +
                                  questions[32][3] +
                                  "</p><p>(D) " +
                                  questions[32][4] +
                                  "</p><p>Right Answer - " +
                                  questions[32][5] +
                                  "</p><p>Your Answer - " +
                                  tick[32] +
                                  "</p><br/><p>Q34. " +
                                  questions[33][0] +
                                  "</p><p>(A) " +
                                  questions[33][1] +
                                  "</p><p>(B) " +
                                  questions[33][2] +
                                  "</p><p>(C) " +
                                  questions[33][3] +
                                  "</p><p>(D) " +
                                  questions[33][4] +
                                  "</p><p>Right Answer - " +
                                  questions[33][5] +
                                  "</p><p>Your Answer - " +
                                  tick[33] +
                                  "</p><br/><p>Q35. " +
                                  questions[34][0] +
                                  "</p><p>(A) " +
                                  questions[34][1] +
                                  "</p><p>(B) " +
                                  questions[34][2] +
                                  "</p><p>(C) " +
                                  questions[34][3] +
                                  "</p><p>(D) " +
                                  questions[34][4] +
                                  "</p><p>Right Answer - " +
                                  questions[34][5] +
                                  "</p><p>Your Answer - " +
                                  tick[34] +
                                  "</p><br/><p>Q36. " +
                                  questions[35][0] +
                                  "</p><p>(A) " +
                                  questions[35][1] +
                                  "</p><p>(B) " +
                                  questions[35][2] +
                                  "</p><p>(C) " +
                                  questions[35][3] +
                                  "</p><p>(D) " +
                                  questions[35][4] +
                                  "</p><p>Right Answer - " +
                                  questions[35][5] +
                                  "</p><p>Your Answer - " +
                                  tick[35] +
                                  "</p><br/><p>Q37. " +
                                  questions[36][0] +
                                  "</p><p>(A) " +
                                  questions[36][1] +
                                  "</p><p>(B) " +
                                  questions[36][2] +
                                  "</p><p>(C) " +
                                  questions[36][3] +
                                  "</p><p>(D) " +
                                  questions[36][4] +
                                  "</p><p>Right Answer - " +
                                  questions[36][5] +
                                  "</p><p>Your Answer - " +
                                  tick[36] +
                                  "</p><br/><p>Q38. " +
                                  questions[37][0] +
                                  "</p><p>(A) " +
                                  questions[37][1] +
                                  "</p><p>(B) " +
                                  questions[37][2] +
                                  "</p><p>(C) " +
                                  questions[37][3] +
                                  "</p><p>(D) " +
                                  questions[37][4] +
                                  "</p><p>Right Answer - " +
                                  questions[37][5] +
                                  "</p><p>Your Answer - " +
                                  tick[37] +
                                  "</b><br/><p>Q39. " +
                                  questions[38][0] +
                                  "</p><p>(A) " +
                                  questions[38][1] +
                                  "</p><p>(B) " +
                                  questions[38][2] +
                                  "</p><p>(C) " +
                                  questions[38][3] +
                                  "</p><p>(D) " +
                                  questions[38][4] +
                                  "</p><p>Right Answer - " +
                                  questions[38][5] +
                                  "</p><p>Your Answer - " +
                                  tick[38] +
                                  "</p><br/><p>Q40. " +
                                  questions[39][0] +
                                  "</p><p>(A) " +
                                  questions[39][1] +
                                  "</p><p>(B) " +
                                  questions[39][2] +
                                  "</p><p>(C) " +
                                  questions[39][3] +
                                  "</p><p>(D) " +
                                  questions[39][4] +
                                  "</p><p>Right Answer - " +
                                  questions[39][5] +
                                  "</p><p>Your Answer - " +
                                  tick[39] +
                                  "</p><br/><b>GK</b></p><br/><p>Q41. " +
                                  questions[40][0] +
                                  "</p><p>(A) " +
                                  questions[40][1] +
                                  "</p><p>(B) " +
                                  questions[40][2] +
                                  "</p><p>(C) " +
                                  questions[40][3] +
                                  "</p><p>(D) " +
                                  questions[40][4] +
                                  "</p><p>Right Answer - " +
                                  questions[40][5] +
                                  "</p><p>Your Answer - " +
                                  tick[40] +
                                  "</p><br/><p>Q42. " +
                                  questions[41][0] +
                                  "</p><p>(A) " +
                                  questions[41][1] +
                                  "</p><p>(B) " +
                                  questions[41][2] +
                                  "</p><p>(C) " +
                                  questions[41][3] +
                                  "</p><p>(D) " +
                                  questions[41][4] +
                                  "</p><p>Right Answer - " +
                                  questions[41][5] +
                                  "</p><p>Your Answer - " +
                                  tick[41] +
                                  "</p><br/><p>Q43. " +
                                  questions[42][0] +
                                  "</p><p>(A) " +
                                  questions[42][1] +
                                  "</p><p>(B) " +
                                  questions[42][2] +
                                  "</p><p>(C) " +
                                  questions[42][3] +
                                  "</p><p>(D) " +
                                  questions[42][4] +
                                  "</p><p>Right Answer - " +
                                  questions[42][5] +
                                  "</p><p>Your Answer - " +
                                  tick[42] +
                                  "</p><br/><p>Q44. " +
                                  questions[43][0] +
                                  "</p><p>(A) " +
                                  questions[43][1] +
                                  "</p><p>(B) " +
                                  questions[43][2] +
                                  "</p><p>(C) " +
                                  questions[43][3] +
                                  "</p><p>(D) " +
                                  questions[43][4] +
                                  "</p><p>Right Answer - " +
                                  questions[43][5] +
                                  "</p><p>Your Answer - " +
                                  tick[43] +
                                  "</p><br/><b>GK</b></b><br /><p>Q45. " +
                                  questions[44][0] +
                                  "</p><p>(A) " +
                                  questions[44][1] +
                                  "</p><p>(B) " +
                                  questions[44][2] +
                                  "</p><p>(C) " +
                                  questions[44][3] +
                                  "</p><p>(D) " +
                                  questions[44][4] +
                                  "</p><p>Right Answer - " +
                                  questions[44][5] +
                                  "</p><p>Your Answer - " +
                                  tick[44] +
                                  "</p><br/><p>Q46. " +
                                  questions[45][0] +
                                  "</p><p>(A) " +
                                  questions[45][1] +
                                  "</p><p>(B) " +
                                  questions[45][2] +
                                  "</p><p>(C) " +
                                  questions[45][3] +
                                  "</p><p>(D) " +
                                  questions[45][4] +
                                  "</p><p>Right Answer - " +
                                  questions[45][5] +
                                  "</p><p>Your Answer - " +
                                  tick[45] +
                                  "</p><br/><p>Q47. " +
                                  questions[46][0] +
                                  "</p><p>(A) " +
                                  questions[46][1] +
                                  "</p><p>(B) " +
                                  questions[46][2] +
                                  "</p><p>(C) " +
                                  questions[46][3] +
                                  "</p><p>(D) " +
                                  questions[46][4] +
                                  "</p><p>Right Answer - " +
                                  questions[46][5] +
                                  "</p><p>Your Answer - " +
                                  tick[46] +
                                  "</p><br/><p>Q48. " +
                                  questions[47][0] +
                                  "</p><p>(A) " +
                                  questions[47][1] +
                                  "</p><p>(B) " +
                                  questions[47][2] +
                                  "</p><p>(C) " +
                                  questions[47][3] +
                                  "</p><p>(D) " +
                                  questions[47][4] +
                                  "</p><p>Right Answer - " +
                                  questions[47][5] +
                                  "</p><p>Your Answer - " +
                                  tick[47] +
                                  "</p><br/><p>Q49. " +
                                  questions[48][0] +
                                  "</p><p>(A) " +
                                  questions[48][1] +
                                  "</p><p>(B) " +
                                  questions[48][2] +
                                  "</p><p>(C) " +
                                  questions[48][3] +
                                  "</p><p>(D) " +
                                  questions[48][4] +
                                  "</p><p>Right Answer - " +
                                  questions[48][5] +
                                  "</p><p>Your Answer - " +
                                  tick[48] +
                                  "</p><br/><p>Q50. " +
                                  questions[49][0] +
                                  "</p><p>(A) " +
                                  questions[49][1] +
                                  "</p><p>(B) " +
                                  questions[49][2] +
                                  "</p><p>(C) " +
                                  questions[49][3] +
                                  "</p><p>(D) " +
                                  questions[49][4] +
                                  "</p><p>Right Answer - " +
                                  questions[49][5] +
                                  "</p><p>Your Answer - " +
                                  tick[49] +
                                  "</p><br/><p>Q51. " +
                                  questions[50][0] +
                                  "</p><p>(A) " +
                                  questions[50][1] +
                                  "</p><p> (B) " +
                                  questions[50][2] +
                                  "</p><p>(C) " +
                                  questions[50][3] +
                                  "</p><p>(D) " +
                                  questions[50][4] +
                                  "</p><p>Right Answer - " +
                                  questions[50][5] +
                                  "</p><p>Your Answer - " +
                                  tick[50] +
                                  "</p><br/><p>Q.52 " +
                                  questions[51][0] +
                                  "</p><p>(A) " +
                                  questions[51][1] +
                                  "</p><p> (B) " +
                                  questions[51][2] +
                                  "</p><p>(C) " +
                                  questions[51][3] +
                                  "</p><p>(D) " +
                                  questions[51][4] +
                                  "</p><p>Right Answer - " +
                                  questions[51][5] +
                                  "</p><p>Your Answer - " +
                                  tick[51] +
                                  "</p><br/><p>Q.53 " +
                                  questions[52][0] +
                                  "</p><p>(A) " +
                                  questions[52][1] +
                                  "</p><p> (B) " +
                                  questions[52][2] +
                                  "</p><p>(C) " +
                                  questions[52][3] +
                                  "</p><p>(D) " +
                                  questions[52][4] +
                                  "</p><p>Right Answer - " +
                                  questions[52][5] +
                                  "</p><p>Your Answer - " +
                                  tick[52] +
                                  "</p><br/><p>Q.54 " +
                                  questions[53][0] +
                                  "</p><p>(A) " +
                                  questions[53][1] +
                                  "</p><p> (B) " +
                                  questions[53][2] +
                                  "</p><p>(C) " +
                                  questions[53][3] +
                                  "</p><p>(D) " +
                                  questions[53][4] +
                                  "</p><p>Right Answer - " +
                                  questions[53][5] +
                                  "</p><p>Your Answer - " +
                                  tick[53] +
                                  "</p><br/><p>Q.55 " +
                                  questions[54][0] +
                                  "</p><p>(A) " +
                                  questions[54][1] +
                                  "</p><p> (B) " +
                                  questions[54][2] +
                                  "</p><p>(C) " +
                                  questions[54][3] +
                                  "</p><p>(D) " +
                                  questions[54][4] +
                                  "</p><p>Right Answer - " +
                                  questions[54][5] +
                                  "</p><p>Your Answer - " +
                                  tick[54] +
                                  "</p><br/><p>Q.56 " +
                                  questions[55][0] +
                                  "</p><p>(A) " +
                                  questions[55][1] +
                                  "</p><p> (B) " +
                                  questions[55][2] +
                                  "</p><p>(C) " +
                                  questions[55][3] +
                                  "</p><p>(D) " +
                                  questions[55][4] +
                                  "</p><p>Right Answer - " +
                                  questions[55][5] +
                                  "</p><p>Your Answer - " +
                                  tick[55] +
                                  "</p><br/><p>Q.57 " +
                                  questions[56][0] +
                                  "</p><p>(A) " +
                                  questions[56][1] +
                                  "</p><p> (B) " +
                                  questions[56][2] +
                                  "</p><p>(C) " +
                                  questions[56][3] +
                                  "</p><p>(D) " +
                                  questions[56][4] +
                                  "</p><p>Right Answer - " +
                                  questions[56][5] +
                                  "</p><p>Your Answer - " +
                                  tick[56] +
                                  "</p><br/><p>Q.58 " +
                                  questions[57][0] +
                                  "</p><p>(A) " +
                                  questions[57][1] +
                                  "</p><p> (B) " +
                                  questions[57][2] +
                                  "</p><p>(C) " +
                                  questions[57][3] +
                                  "</p><p>(D) " +
                                  questions[57][4] +
                                  "</p><p>Right Answer - " +
                                  questions[57][5] +
                                  "</p><p>Your Answer - " +
                                  tick[57] +
                                  "</p><br/><p>Q.59 " +
                                  questions[58][0] +
                                  "</p><p>(A) " +
                                  questions[58][1] +
                                  "</p><p> (B) " +
                                  questions[58][2] +
                                  "</p><p>(C) " +
                                  questions[58][3] +
                                  "</p><p>(D) " +
                                  questions[58][4] +
                                  "</p><p>Right Answer - " +
                                  questions[58][5] +
                                  "</p><p>Your Answer - " +
                                  tick[58] +
                                  "</p><br/><p>Q.60 " +
                                  questions[59][0] +
                                  "</p><p>(A) " +
                                  questions[59][1] +
                                  "</p><p> (B) " +
                                  questions[59][2] +
                                  "</p><p>(C) " +
                                  questions[59][3] +
                                  "</p><p>(D) " +
                                  questions[59][4] +
                                  "</p><p>Right Answer - " +
                                  questions[59][5] +
                                  "</p><p>Your Answer - " +
                                  tick[59] +
                                  "</p>";
                              }
                              window.addEventListener(
                                "load",
                                renderQuestion,
                                false
                              );