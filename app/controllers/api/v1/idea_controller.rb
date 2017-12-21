class Api::V1::IdeaController < Api::V1::BaseController
  def index
    respond_with Idea.all
  end

  def show
    respond_with Idea.find(params[:id])
  end

  def create
    idea = Idea.create_clean(idea_params)
    respond_with :api, :v1, idea
  end

  def update
    idea = Idea.find(params[:id])
    respond_with :api, :v1, idea.update(idea_params)
  end

  def destroy
    respond_with :api, :v1, idea.destroy(params[:id])
  end

  private
  def idea_params
    params.require(:idea).permit(:id, :title, :description)
  end
end
