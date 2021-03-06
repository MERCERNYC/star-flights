class Airline < ApplicationRecord
    has_many :reviews

    before_create :slugify

    #parameterize method should handle both downcasing characters and replacing spaces with hyphens 
    def slugify
      self.slug = name.parameterize  
    end

    # avg_score method should take all of the reviews that belong to an airline and get the average overall rating
    def avg_score
      return 0 unless reviews.count.positive?
      reviews.average(:score).round(2).to_f
    end 

end
