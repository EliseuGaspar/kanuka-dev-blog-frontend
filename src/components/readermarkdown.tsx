import {React, ReactMarkdown, PropsMarkdownRenderer } from "@/app/global.imports";
import styles from "@/styles/modules/MarkdownRender.module.css";
import remarkGfm from 'remark-gfm';

const MarkdownRenderer: React.FC<PropsMarkdownRenderer> = ({ content }) => {
    return (
        <div className={styles.markdown}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({ node, ...props }) => <h1 className={styles.h1} {...props} />,
                    h2: ({ node, ...props }) => <h2 className={styles.h2} {...props} />,
                    p: ({ node, ...props }) => <p className={styles.p} {...props} />,
                    a: ({ node, ...props }) => <a className={styles.a} {...props} />,
                    ul: ({ node, ...props }) => <ul className={styles.ul} {...props} />,
                    li: ({ node, ...props }) => <li className={styles.li} {...props} />,
                }}
            >
                {content}
            </ReactMarkdown>
    </div>
    )
};

export default MarkdownRenderer;