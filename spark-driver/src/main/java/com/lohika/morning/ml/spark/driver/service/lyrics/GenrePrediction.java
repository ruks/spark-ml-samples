package com.lohika.morning.ml.spark.driver.service.lyrics;

public class GenrePrediction {

    private String genre;
    private Double pop;
    private Double country;
    private Double blues;
    private Double jazz;
    private Double reggae;
    private Double rock;
    private Double hipHop;
    private Double rap;

    public GenrePrediction(String genre, Double pop, Double country,
            Double blues, Double jazz, Double reggae, Double rock,
            Double hipHop, Double rap) {
        this.genre = genre;
        this.pop = pop;
        this.country = country;
        this.blues = blues;
        this.jazz = jazz;
        this.reggae = reggae;
        this.rock = rock;
        this.hipHop = hipHop;
        this.rap = rap;
    }

    public GenrePrediction(String genre) {
        this.genre = genre;
    }

    public String getGenre() {
        return genre;
    }

    public Double getPop() {
        return pop;
    }

    public Double getCountry() {
        return country;
    }

    public Double getBlues() {
        return blues;
    }

    public Double getJazz() {
        return jazz;
    }

    public Double getReggae() {
        return reggae;
    }

    public Double getRock() {
        return rock;
    }

    public Double getHipHop() {
        return hipHop;
    }

    public Double getRap() {
        return rap;
    }
}
