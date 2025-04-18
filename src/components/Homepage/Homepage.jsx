import React from 'react'
import Home from '../../shared/components/Home/Home'

export default function Homepage() {

    const keywords = [
        "Cognitive Science", "Behavioral Science", "Cognitive Psychology",
        "Neuroscience", "Human Behavior", "Memory and Learning",
        "Decision-Making", "Attention and Perception", "Emotional Cognition",
        "Social Cognition", "Neuropsychology", "Developmental Psychology",
        "Cognitive Development", "Educational Psychology", "Cognitive Therapy",
        "Behavioral Therapy", "Mental Health", "Brain-Behavior Interaction",
        "Mindfulness and Cognition", "Clinical Psychology", "Psychological Assessment",
        "Behavioral Neuroscience", "Cognitive Modeling", "Language and Cognition",
        "Emotion Regulation", "Motivation and Behavior", "Executive Function",
        "Cognitive Disorders", "Consciousness Studies", "Human-Computer Interaction"
    ];
    

    // Split the keywords into three arrays of 15 each
    const firstRow = keywords.slice(0, 10);
    const secondRow = keywords.slice(10, 20);
    const thirdRow = keywords.slice(20, 30);


    return (
        <div>
            <Home keywords={keywords} firstRow={firstRow} secondRow={secondRow} thirdRow={thirdRow} />
        </div>
    )
}
