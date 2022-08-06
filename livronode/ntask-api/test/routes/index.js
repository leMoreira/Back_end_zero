describe('Routes: Index', () => {
<<<<<<< HEAD
    describe('GET /', () => {
      it('returns the API status', () => {
        request.get('/')
          .expect(200)
          .end((err, res) => {
            const expected = { status: 'NTask API' };
            expect(res.body).to.eql(expected);
             done(err);
          });
      });
    });
  });
=======
  describe('GET /', () => {
    it('returns the API status', () => {
      request.get('/')
        .expect(200)
        .end((err, res) => {
          const expected = { status: 'NTask API' };
          expect(res.body).to.eql(expected);
           done(err);
        });
    });
  });
});
>>>>>>> a9bf8e899dd3a809ebc987a4500df6bba9db6fe6
