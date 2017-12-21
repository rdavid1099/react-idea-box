class Idea < ApplicationRecord
  validates :title, presence: true

  def self.create_clean(idea_params)
    idea_params = clear_likes(idea_params)
    create(idea_params)
  end

  private
  def self.clear_likes(params)
    params[:likes] = 0
    params[:dislikes] = 0
    params
  end
end
