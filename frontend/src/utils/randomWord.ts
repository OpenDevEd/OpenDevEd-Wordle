const words: string[] = [
    'react', 'state', 'props', 'hooks', 'redux', 'walid', 'wheat',
    'apple', 'brick', 'crown', 'dance', 'eagle', 'flute', 'grape', 
    'heart', 'jelly', 'knife', 'lemon', 'magic', 'night', 'ocean', 
    'plant', 'quiet', 'river', 'storm', 'table', 'unity', 'voice', 
    'water', 'xenon', 'yacht', 'zebra', 'arrow', 'blade', 'clear', 
    'drift', 'earth', 'frost', 'giant', 'horse', 'ivory', 'jolly', 
    'light', 'mouse', 'novel', 'olive', 'pearl', 'quest', 'roast', 
    'shine', 'tiger', 'urban', 'vivid', 'whisk', 'xylos', 'yield', 
    'zebra', 'amber', 'birch', 'climb', 'dwarf', 'equal', 'flame', 
    'ghost', 'hazel', 'irony', 'joker', 'kebab', 'layer', 'maple', 
    'north', 'ounce', 'piney', 'quirk', 'razor', 'shade', 'tread', 
    'usher', 'valor', 'world', 'xenos', 'young', 'zesty', 'adapt', 
    'brave', 'craft', 'drive', 'entry', 'flash', 'glory', 'heavy', 
    'image', 'joint', 'karma', 'layer', 'manor', 'nerve', 'other', 
    'panic', 'quiet', 'relay', 'scope', 'torch', 'under', 'valor',
  ];

export function getRandomWord(): string {
  return words[Math.floor(Math.random() * words.length)];
}

