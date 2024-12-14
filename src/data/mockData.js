import LinguisticService from '../models/Service';
import { FaLanguage, FaMicrophone, FaBullhorn, FaChalkboardTeacher, FaBook } from 'react-icons/fa';

const mockServices = [
    new LinguisticService(
        'Translation',
        'Provides professional translation services for various documents and content.',
        ['Legal documents', 'Technical manuals', 'Marketing materials'],
        FaLanguage,
        '#4F8C6F', // mintGreen
        'business'
    ),
    new LinguisticService(
        'Transcription',
        'Offers accurate transcription services for audio and video content.',
        ['Interviews', 'Meetings', 'Podcasts'],
        FaMicrophone,
        '#48735F', // sage
        'business'
    ),
    new LinguisticService(
        'Strategic Communication',
        'Helps businesses develop effective communication strategies.',
        ['Public relations', 'Corporate communication', 'Crisis management'],
        FaBullhorn,
        '#404040', // gray40
        'business'
    ),
    new LinguisticService(
        'Spanish Tutoring',
        'Provides personalized Spanish tutoring sessions.',
        ['Beginner to advanced levels', 'Conversation practice', 'Grammar and vocabulary'],
        FaChalkboardTeacher,
        '#4F8C6F', // mintGreen
        'personal'
    ),
    new LinguisticService(
        'Tailored Lessons',
        'Offers customized Spanish lessons to meet individual needs.',
        ['Business Spanish', 'Travel Spanish', 'Exam preparation'],
        FaBook,
        '#48735F', // sage
        'personal'
    )
];

export default mockServices;