export const DEFAULT_COMPONENT_RECIPES: Record<string, Record<string, string>> = {
  'circle-button': {
    display: 'inline-flex',
    'align-items': 'center',
    'justify-content': 'center',
    width: '2.5rem',
    height: '2.5rem',
    padding: '0',
    border: '1px solid transparent',
    'border-radius': '9999px',
    cursor: 'pointer',
    'box-sizing': 'border-box',
  },
  'input-rounded': {
    display: 'block',
    width: '100%',
    'box-sizing': 'border-box',
    padding: '0.5rem 0.75rem',
    'border-radius': '0.75rem',
    border: '1px solid #cbd5e1',
    'font-size': '1rem',
    'line-height': '1.5',
  },
};
