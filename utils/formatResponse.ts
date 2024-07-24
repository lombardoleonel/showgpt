export default function formatResponse(response: string){
    return response.replaceAll("\n", "<br>").replaceAll("* **", "**");
}