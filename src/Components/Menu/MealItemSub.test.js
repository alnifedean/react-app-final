import { render, screen } from '@testing-library/react';
import { useAuthContext } from '../../context/AuthContext';
import '@testing-library/jest-dom';
import MealItemSub from './MealItemSub';


jest.mock('../../context/AuthContext', () => ({
  useAuthContext: jest.fn(),
}));

describe('MealItemSub', () => {
  beforeEach(() => {
    useAuthContext.mockReturnValue({
      setData: jest.fn(),
      setItemsState: jest.fn(),
      data: { id: '', counter: 0 },
      itemsState: {},
    });
  });

  it('renderiza el componente con el título del item', () => {
    const item = { id: '1', title: 'Tacos', description: 'Delicious tacos', price: 100 };
    render(<MealItemSub item={item} openHandler={jest.fn()} isOpen={false} />);
    expect(screen.getByText('TACOS')).toBeInTheDocument();
  });
});
