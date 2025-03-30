import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LockClosedIcon, CreditCardIcon } from '@heroicons/react/24/solid';

function Checkout() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const [step, setStep] = useState(1); // 1 for shipping, 2 for payment

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Handle payment submission
      console.log('Order submitted:', formData);
    }
  };

  // Sample order summary data
  const orderSummary = {
    subtotal: 499.98,
    shipping: 0,
    tax: 49.99,
    total: 549.97
  };

  return (
    <div className="container-wrapper py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Checkout Form */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Progress Steps */}
            <div className="flex items-center mb-8">
              <div className={`flex items-center ${step === 1 ? 'text-blue-600' : 'text-gray-600'}`}>
                <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold">
                  1
                </div>
                <span className="ml-2">Shipping</span>
              </div>
              <div className="w-16 h-1 mx-4 bg-gray-200"></div>
              <div className={`flex items-center ${step === 2 ? 'text-blue-600' : 'text-gray-600'}`}>
                <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold">
                  2
                </div>
                <span className="ml-2">Payment</span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                /* Shipping Information */
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded-md"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded-md"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Street Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Apartment, suite, etc. (optional)</label>
                      <input
                        type="text"
                        name="apartment"
                        value={formData.apartment}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded-md"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">State</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded-md"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">ZIP Code</label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded-md"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                  </div>
                </div>
              ) : (
                /* Payment Information */
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Payment Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Card Number</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="1234 5678 9012 3456"
                          className="w-full p-2 pl-10 border rounded-md"
                          required
                        />
                        <CreditCardIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Name on Card</label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Expiry Date</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          className="w-full p-2 border rounded-md"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          className="w-full p-2 border rounded-md"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-between items-center">
                {step === 2 && (
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Back to Shipping
                  </button>
                )}
                <button
                  type="submit"
                  className="btn-primary flex items-center"
                >
                  {step === 1 ? (
                    'Continue to Payment'
                  ) : (
                    <>
                      <LockClosedIcon className="h-5 w-5 mr-2" />
                      Place Order
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${orderSummary.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{orderSummary.shipping === 0 ? 'Free' : `$${orderSummary.shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${orderSummary.tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${orderSummary.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link to="/cart" className="text-blue-600 hover:text-blue-800 text-sm">
                Edit Cart
              </Link>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center text-gray-600">
              <LockClosedIcon className="h-5 w-5 mr-2" />
              <span className="text-sm">Your payment information is secure and encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;