import React, { useState } from "react";
import styles from "./Questions.module.scss";
import Button from "../ui/Button/Button";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Bookmark?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget.",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui.",
  },
];

const Questions: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.faq}>
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      {faqData.map((faq, index) => (
        <div key={index} className={styles["faq-item"]}>
          <div className={styles.question} onClick={() => toggleIndex(index)}>
            {faq.question}
            <img
              src="../../../images/icon-arrow.svg"
              className={`${styles.icon} ${
                activeIndex === index ? styles.rotate : ""
              }`}
            />
          </div>
          {activeIndex === index && (
            <div className={styles.answer}>{faq.answer}</div>
          )}
        </div>
      ))}
      <div className={styles["more-info"]}>
        <Button variant="blue-solid">More Info</Button>
      </div>
    </div>
  );
};

export default Questions;
