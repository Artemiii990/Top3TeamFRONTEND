import s from './ProductsTable.module.css';

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  status: string;
};

type Props = {
  products: Product[];
};

export default function ProductsTable({
  products,
}: Props) {
  return (
    <div className={s.wrapper}>
      <table className={s.table}>
        <thead>
          <tr>
            <th>Назва</th>
            <th>Категорія</th>
            <th>Ціна</th>
            <th>Статус</th>
            <th>Дії</th>
          </tr>
        </thead>

        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>

              <td>{product.category}</td>

              <td>${product.price}</td>

              <td>
                <span
                  className={`${s.status} ${
                    product.status === 'Active'
                      ? s.active
                      : s.draft
                  }`}
                >
                  {product.status}
                </span>
              </td>

              <td>
                <button className={s.editBtn}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}