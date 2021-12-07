import { Quote } from './../interfaces/quote';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const quotes = [
      { 
        id: 1,
        text: "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
        author: 'Oscar Wilde',
        category: 'Life'
      },
      { 
        id: 2,
        text: "The only impossible journey is the one you never begin.",
        author: 'Tony Robbins',
        category: 'Love'
      },
      { 
        id: 3,
        text: "It is during our darkest moments that we must focus to see the light.",
        author: 'Aristotle',
        category: 'Motivational'
      },
      { 
        id: 4,
        text: "Life is what happens when you're busy making other plans.",
        author: 'John Lennon',
        category: 'Life'
      },
      {
        id: 5,
        text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        author: 'Buddha',
        category: 'Life'
      },
      {
        id: 6,
        text: "Ships that pass in the night, and speak each other in passing, only a signal shown, and a distant voice in the darkness. So on the ocean of life, we pass and speak one another, only a look and a voice, then darkness again and a silence.",
        author: 'Henry Wadsworth Longfellow',
        category: 'Life'
      },
      {
        id: 7,
        text: "Time is too slow for those who wait, too swift for those who fear, too long for those who grieve, too short for those who rejoice, but for those who love, time is eternity.",
        author: 'Henry Van Dyke',
        category: 'Love'
      },
      {
        id: 8,
        text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
        author: 'Lao Tzu',
        category: 'Love'
      },
      {
        id: 9,
        text: "Someday, after mastering the winds, the waves, the tides and gravity, we shall harness for God the energies of love, and then, for a second time in the history of the world, man will have discovered fire.",
        author: 'Pierre Teilhard de Chardin',
        category: 'Love'
      },
      {
        id: 10,
        text: "Positive feelings come from being honest about yourself and accepting your personality, and physical characteristics, warts and all; and, from belonging to a family that accepts you without question.",
        author: 'Willard Scott',
        category: 'Positive'
      },
      {
        id: 11,
        text: "Correction does much, but encouragement does more.",
        author: 'Johann Wolfgang von Goethe',
        category: 'Positive'
      },
      {
        id: 12,
        text: "Find a place inside where there's joy, and the joy will burn out the pain.",
        author: 'Joseph Campbell',
        category: 'Positive'
      },
      {
        id: 13,
        text: "Never interrupt your enemy when he is making a mistake.",
        author: 'Napoleon Bonaparte',
        category: 'Wisdom'
      },
      {
        id: 14,
        text: "Give me a lever long enough and a fulcrum on which to place it, and I shall move the world.",
        author: 'Archimedes',
        category: 'Wisdom'
      },
      {
        id: 15,
        text: "The greater danger for most of us lies not in setting our aim too high and falling short. but in setting our aim too low, and achieving our mark.",
        author: 'Michelangelo',
        category: 'Wisdom'
      },
      {
        id: 16,
        text: "It always seems impossible until it's done.",
        author: 'Nelson Mandela',
        category: 'Motivational'
      },
      {
        id: 17,
        text: "Aim for the moon. If you miss, you may hit a star.",
        author: 'W. Clement Stone',
        category: 'Motivational'
      },
      {
        id: 18,
        text: "Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.",
        author: 'Bradley Whitford',
        category: 'Motivational'
      },
      {
        id: 19,
        text: "Quality is not an act, it is a habit.",
        author: 'Aristotle',
        category: 'Motivational'
      },
      {
        id: 20,
        text: "Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.",
        author: 'Stephen Hawking',
        category: 'Motivational'
      },
      {
        id: 21,
        text: "Sometimes being a friend means mastering the art of timing. There is a time for silence. A time to let go and allow people to hurl themselves into their own destiny. And a time to prepare to pick up the pieces when it's all over.",
        author: 'Octavia E. Butler',
        category: 'Friendship'
      },
      {
        id: 22,
        text: "Some people go to priests. Others to poetry. I to my friends.",
        author: 'Virginia Woolf',
        category: 'Friendship'
      },
      {
        id: 23,
        text: "Lay this unto your breast: Old friends, like old swords, still are trusted best.",
        author: 'John Webster',
        category: 'Friendship'
      },
      {
        id: 24,
        text: "A wise man is superior to any insults which can be put upon him, and the best reply to unseemly behavior is patience and moderation.",
        author: 'Moliere',
        category: 'Wisdom'
      },
      {
        id: 25,
        text: "If you set out to be liked, you would be prepared to compromise on anything at any time, and you would achieve nothing.",
        author: 'Margaret Thatcher',
        category: 'Wisdom'
      }
    ];

    const categories = [
      {
        id: 1,
        name: 'Life'
      },
      {
        id: 2,
        name: 'Love'
      },
      {
        id: 3,
        name: 'Positive'
      },
      {
        id: 4,
        name: 'Wisdom'
      },
      {
        id: 5,
        name: 'Motivational'
      },
      {
        id: 6,
        name: 'Friendship'
      }
    ];
    
    return {quotes, categories};
  }
  
  // Generisanje Id-a

  genId(quotes: Quote[]): number {
    return quotes.length > 0 ? Math.max(...quotes.map(quote => quote.id)) + 1 : 1;
  }
}
