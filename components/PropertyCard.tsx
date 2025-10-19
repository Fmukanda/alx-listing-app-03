import React from 'react';
import { PropertyProps } from '../interfaces';

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const discountedPrice = property.discount 
    ? property.price * (1 - parseInt(property.discount) / 100)
    : null;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      {/* Image */}
      <div className="relative h-48">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        {property.discount && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{property.discount}%
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Location */}
        <p className="text-gray-600 text-sm mb-1">
          {property.address.city}, {property.address.country}
        </p>
        
        {/* Name */}
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">
          {property.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <span className="text-yellow-400 mr-1">★</span>
          <span className="text-gray-700 font-medium">
            {property.rating}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              ${discountedPrice ? discountedPrice.toFixed(0) : property.price}
            </span>
            {discountedPrice && (
              <span className="text-gray-500 line-through text-sm">
                ${property.price}
              </span>
            )}
            <span className="text-gray-500 text-sm">/ night</span>
          </div>
        </div>

        {/* Offers */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>{property.offers.bed} beds</span>
            <span>{property.offers.shower} showers</span>
            <span>{property.offers.occupants} guests</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
