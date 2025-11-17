import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    img: string
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Inspiration Save',
        img: require('@site/static/img/whiteboard.png').default,
        description: (
            <>
                A software for saving inspiration,
                including multiple tools such as sticky notes, whiteboard, markdown editor and more.
            </>
        ),
    },
    {
        title: 'Local First',
        img: require('@site/static/img/file-system.png').default,
        description: (
            <>
                All documents saved in Local File System, no need to worry about data leakage.
            </>
        ),
    },
    {
        title: 'Ai Integration',
        img: require('@site/static/img/ai-chats.png').default,
        description: (
            <>
                Use ai conversation to generate documents, supports markdown、flow chat、word and more.
            </>
        ),
    },
];

function Feature({title, img, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img src={img} style={{
                    borderRadius: '15px',
                }} alt={title} />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
