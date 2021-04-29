module API
  module V1
    class AirlinesController < ApplicationController
        
        #get all of the airlines from database and render the data as JSON
        def index
          airlines = Airline.all
          render json: AirlineSerializer.new(airlines, options).serialized_json
        end 
        
        def show
          airline = Airline.find_by(slug: params[:slug])
          render json: AirlineSerializer.new(airlines, options).serialized_json
        end 

        def create
          airline = Airline.new(airline_params)
          if airline.save
            render json: AirlineSerializer.new(airline).serializer_json    
          else
            render json: { error: airline.errors.messages }, status: 402 
          end
        end 

        def update
          airline = Airline.find_by(slug: params[:slug])
          if airline.update(airline_params)
            render json: AirlineSerializer.new(airline, options).serializer_json    
          else
            render json: { error: airline.errors.messages }, status: 422
          end
        end 

        def destroy
          airline = Airline.find_by(slug: params[:slug])
          if airline.destroy
            head :no_content 
          else
            render json: { error: airline.errors.messages }, status: 422
          end
        end 

        private

        def airline_params
          params.require(:airline).permit(:name, :image_url)
        end 

        def options
          @options ||= { include: %i[reviews]}
        end 

    end 
  end 
end 