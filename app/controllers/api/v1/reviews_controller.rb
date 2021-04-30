module Api
  module V1
    class ReviewsController < ApplicationController

      def create
        review = Review.new(reviews_params)

        if review.save
          render json: { error: review.errors.messages }, status: 422
      end 

      def destroy
        review = Review.find(params[:id])
        if review.destroy
          head :no_content
        else
          render json: { error: review.errors.messages }, status: 422
        end 
      end

      private

      def reviews_params
        params.require(:review).permit(:title, :description, :score, :airline_id)
      end 
      
    end 
  end 
end 