import React, { useState } from "react";
import FAQP from "./FAQP";
import "./faq.css";
function FAQ() {
  const [faqs, setfaqs] = useState([
    {
      question: "How do you get started with coding on AI/ML?",
      answer:
        "Pick a topic you are interested in, Find a quick solution, Improve your simple solution, Share your solution and Repeat the above for different algorithms.",
      open: false,
    },
    {
      question:
        "I would like to my articles. How do I make a good edit that will improve the quality of the post?",
      answer:
        "Make your edits as complete as possible and Do not edit spam posts.In addition,Do not edit code in questions unless you know exactly what you are doing.Lastly, Write a relevant Edit Summary and Avoid putting unnesscary tags in your articles.",
      open: false,
    },
    {
      question: "Is it okay to ask for code optimization help?",
      answer:
        "Consider what it is you are asking.If you have actually profiled the code, have specific snippets so that everyone can run the same code to see its performance, and you have this library publicly published somewhere, like GitHub, Bitbucket, or another public facing code repository, then asking it on Code Review is acceptable.If you are just starting the code but have profiled an exact snippet that exhibits the aberrant performance, then asking it on Stack Overflow is acceptable.Per the above, including the results from your profiler of choice with identified bottlenecks would go a long way towards keeping it on topic on either site. However, if you are looking for someone to help you optimize the code without having done any of the due diligence mentioned prior, reconsider posting your question. It is important that you demonstrate why you believe that your piece of code is not performant, as well as provide as much evidence as you can to back it up.",
      open: false,
    },
    {
      question: "How to ask a good question on a specific topic?",
      answer:
        "Do Your Research (i.e. do not be a duplicate), Generalize Everything, Detail Your Efforts (with code) and Keep the Pleasantries Out of it. Finally, Market Your Question Correctly with the help of tags",
      open: false,
    },
    {
      question: "Do you provide videos on AI/ML coding and content?",
      answer: "We are working on it at the moment. They will be provided soon.",
      open: false,
    },
  ]);
  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <div className="App">
      <div className="content">
        <h1>FAQ</h1>
      </div>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQP faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
