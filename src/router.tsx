import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from 'components/pages/home';
import NewOrder from 'components/pages/new-order';
import DetailOrder from 'components/pages/detail-order';
import OrderCheck from 'components/pages/order-check';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/new-order" element={<NewOrder />} />
        <Route path="/detail-order/:orderId" element={<DetailOrder />} />
        <Route path="/order-check/:orderId" element={<OrderCheck />} />
      </Routes>
    </BrowserRouter>
  );
};
